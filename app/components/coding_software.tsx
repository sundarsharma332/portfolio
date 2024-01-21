"use client"

const programmingSoftwares = [
    {
      id: 1,
      name: 'Visual Studio Code',
      href: 'https://code.visualstudio.com/',
      title: 'Andorid / iOS App Development',
      imageSrc: './vscode.png',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Android Studtio',
      href: 'https://developer.android.com/studio',
      title: 'Android App Development',
      imageSrc: './studio.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Github',
      href: 'https://github.com/',
      title: 'Version Management',
      imageSrc: './github.png',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'GitLab',
      href: 'https://about.gitlab.com/',
      title: 'Version Management',
      imageSrc: './gitlab.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
   
  ]
  
  export default function ProgrammingSoftwares() {
    return (
      <div className="">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:12 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">ProgrammingSoftwares</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {programmingSoftwares.map((item) => (
              <a key={item.id} href={item.href} target="_blank" className="group shadow- rounded-sm">
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
  