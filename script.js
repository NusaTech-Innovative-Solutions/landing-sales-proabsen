const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const productTabs = [...document.querySelectorAll("[data-product-tab]")];
const productPanels = [...document.querySelectorAll("[data-product-panel]")];
const faqItems = [...document.querySelectorAll(".faq-item")];

const renderIcons = () => {
  if (!window.lucide) return;

  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8,
    },
  });
};

const setMenuState = (isOpen) => {
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
  menuButton.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  renderIcons();
};

menuButton.addEventListener("click", () => {
  setMenuState(!navigation.classList.contains("is-open"));
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 780) setMenuState(false);
});

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

productTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedPanel = tab.dataset.productTab;

    productTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
      item.setAttribute("tabindex", isSelected ? "0" : "-1");
    });

    productPanels.forEach((panel) => {
      const isSelected = panel.dataset.productPanel === selectedPanel;
      panel.hidden = !isSelected;
      panel.classList.toggle("is-active", isSelected);

      if (isSelected) {
        panel.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
      }
    });
  });

  tab.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;

    event.preventDefault();
    const currentIndex = productTabs.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const targetIndex = (currentIndex + direction + productTabs.length) % productTabs.length;
    productTabs[targetIndex].focus();
    productTabs[targetIndex].click();
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    const shouldOpen = !item.classList.contains("is-open");

    faqItems.forEach((faqItem) => {
      faqItem.classList.remove("is-open");
      faqItem.querySelector("button").setAttribute("aria-expanded", "false");
    });

    if (shouldOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

    if (!visibleSection) return;

    navigationLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleSection.target.id}`);
    });
  },
  { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25, 0.5] },
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

document.querySelector("[data-year]").textContent = new Date().getFullYear();

renderIcons();