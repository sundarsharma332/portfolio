"use client"

const products = [
    {
      id: 1,
      name: 'Figma',
      href: '#',
      price: 'UI Design & Research',
      imageSrc: './figma.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Adobe XD',
      href: '#',
      price: 'Visual Design & Prototyping',
      imageSrc: './xd.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Notion',
      href: '#',
      price: 'Documentation & Research Tracking',
      imageSrc: './notion.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Jira',
      href: '#',
      price: 'Project Management & Sprint Planning',
      imageSrc: './jira.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 1,
        name: 'Behance',
        href: '#',
        price: 'Moodboards & Reference',
        imageSrc: './behance.png',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Google Docs',
        href: '#',
        price: 'Resaerch & Documentation',
        imageSrc: './docs.png',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Microsoft Excel',
        href: '#',
        price: 'Task Management',
        imageSrc: './excel.png',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Slack',
        href: '#',
        price: 'Colaboration & Resarch',
        imageSrc: './slack.png',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
   
  ]
  
  export default function SoftwaresUsedForDesign() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group shadow-sm rounded-sm p-2">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  