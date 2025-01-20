// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      // { title: "Quick Start Guide", href: "/quick-start-guide" },
      // {
      //   title: "Project Structure",
      //   href: "/project-structure",
      // },
      // {
      //   title: "Components",
      //   href: "/components",
      //   items: [
      //     { title: "Stepper", href: "/stepper" },
      //     { title: "Tabs", href: "/tabs" },
      //     { title: "Note", href: "/note" },
      //     { title: "Code Block", href: "/code-block" },
      //     { title: "Image & Link", href: "/image-link" },
      //     { title: "Custom", href: "/custom" },
      //   ],
      // },
      // { title: "Themes", href: "/themes" },
      // {
      //   title: "Customize",
      //   href: "/customize",
      // },
    ],
  },
  {
    title: "Core concepts",
    href: '/core-concepts',
    noLink: true,
    items:[
      {
        title: 'JavaScript',
        href: '/javascript'
      },
      {
        title: 'Typescript',
        href: '/typescript'
      },
      {
        title: 'Browser Internals',
        href: '/browser-internals'
      },
      {
        title: 'Web APIs',
        href: '/web-apis'
      },
      {
        title: 'Data structures',
        href: '/data-structures'
      },
      {
        title: 'UX, accessibility, i18n',
        href: 'accessibility'
      },
      {
        title: 'Security',
        href: 'security'
      },
      {
        title: 'Performance and Sustainability',
        href: 'performance'
      }
    ]
  },
  {
    title: "Advanced concepts",
    href: 'advanced-concepts',
    noLink: true,
    items: [
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'PWAs',
        href: 'pwas'
      },
      {
        title: 'Workers',
        href: 'workers'
      },
      {
        title: 'Refactoring',
        href: 'refactoring'
      },
      {
        title: 'Performance optimization',
        href: 'performance-optimization'
      },
      {
        title: 'Server side rendering',
        href: 'ssr'
      },
      {
        title: 'State management',
        href: 'state-management'
      },
      {
        title: 'NPM and Libraries',
        href: 'npm-and-libraries'
      },
      {
        title: 'Testing',
        href: 'testing'
      },
      {
        title: 'CI/CD',
        href: 'ci-cd'
      }
    ]
  },
  {
    title: 'Angular',
    href: 'angular',
    noLink: true,
    items: [
      {
        title: 'Core',
        href: 'core',
        noLink: true,
        items: [
          {
            title: 'RxJS / Reactive',
            href: 'rxjs'
          },
          {
            title: 'Change detection',
            href: 'change-detection'
          },
          {
            title: 'ZoneJS',
            href: 'zonejs'
          },
          {
            title: 'Forms',
            href: 'forms'
          },
          {
            title: 'Templates',
            href: 'templates'
          },
        ]
      },
      {
        title:'Data flow',
        href: 'data-flow',
        noLink: true,
        items: [
          {
            title: 'Dependency Injection',
            href: 'dependency-injection'
          },
          {
            title: 'Interceptors',
            href: 'interceptors'
          },
          {
            title: 'Push architecture',
            href: 'push-architecture'
          },
          {
            title: 'Facade pattern',
            href: 'facade-pattern'
          },
          {
            title: 'State management',
            href: 'state-management'
          },
        ]
      },
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'NX monorepo',
        href: 'NX monorepo'
      },
      {
        title: 'Angular checklist',
        href: 'checklist'
      },
      {
        title: 'Conclusion and best practices',
        href: 'best-practices'
      }
      
    ]
  },
  {
    title: 'Vue.js',
    href: 'vuejs',
    noLink: true,
    items: [
      {
        title: 'Core',
        href: 'core',
        noLink: true,
        items: [
          {
            title: 'Reactivity',
            href: 'reactivity'
          },
          {
            title: 'Change detection',
            href: 'change-detection'
          },
          {
            title: 'Composition API',
            href: 'composition-api'
          },
          {
            title: 'Forms',
            href: 'forms'
          },
          {
            title: 'Templates',
            href: 'templates'
          },
        ]
      },
      {
        title: 'Data flow',
        href: 'data-flow',
        noLink: true,
        items: [
          {
            title: 'Dependency Injection',
            href: 'dependency-injection'
          },
          {
            title: 'Interceptors',
            href: 'interceptors'
          },
          {
            title: 'Push architecture',
            href: 'push-architecture'
          },
          {
            title: 'Facade pattern',
            href: 'facade-pattern'
          },
          {
            title: 'State management',
            href: 'state-management'
          },
        ]
      },
      {
        title: 'Microfrontends',
        href: 'microfrontends'
      },
      {
        title: 'Monorepo setup',
        href: 'monorepo-setup'
      },
      {
        title: 'Vue.js checklist',
        href: 'checklist'
      },
      {
        title: 'Conclusion and best practices',
        href: 'best-practices'
      }
    ]
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
