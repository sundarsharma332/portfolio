"use client"

const designTools = [
    {
      id: 1,
      name: 'Figma',
      href: 'https://www.figma.com/',
      title: 'UI Design & Research',
      imageSrc: './figma.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Adobe XD',
      href: 'https://helpx.adobe.com/xd/get-started.html',
      title: 'Visual Design & Prototyping',
      imageSrc: './xd.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Notion',
      href: 'https://www.notion.so/',
      title: 'Documentation & Research Tracking',
      imageSrc: './notion.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Jira',
      href: 'https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=143485223644&campaign=18442427757&creative=656562805594&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p73345677068&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gad_source=1&gclid=EAIaIQobChMIr8a1hILvgwMVKddMAh1vwwZFEAAYASAAEgJgA_D_BwE&gclsrc=aw.ds',
      title: 'Project Management & Sprint Planning',
      imageSrc: './jira.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Behance',
        href: 'https://www.behance.net/',
        title: 'Moodboards & Reference',
        imageSrc: './behance.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 6,
        name: 'Google Docs',
        href: 'https://www.google.com/docs/about/',
        title: 'Resaerch & Documentation',
        imageSrc: './docs.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 7,
        name: 'Microsoft Excel',
        href: 'https://www.microsoft.com/en-in/microsoft-365/excel',
        title: 'Task Management',
        imageSrc: './excel.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 8,
        name: 'Slack',
        href: 'https://slack.com/intl/en-in',
        title: 'Colaboration & Resarch',
        imageSrc: './slack.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
   
  ]
  
  export default function SoftwaresUsedForDesign() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-12 lg:max-w-5xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {designTools.map((item) => (
              <a key={item.id} href={item.href} target="_blank" className="group shadow-sm rounded-sm p-2">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  