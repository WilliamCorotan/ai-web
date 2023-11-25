import Image from 'next/image'
import ImageUploader from '@/components/ImageUploader'
import bgUploadSection from '@/public/assets/backgrounds/upload-section-bg.webp'

export default function Home() {
  return (
    <main className='h-[calc(100vh-64px)] w-screen '>

      <section id="upload-section" className='w-screen h-[inherit] grid place-items-center'>

          <Image
            alt="Medical Tablets"
            src={bgUploadSection}
            
            placeholder='blur'
            quality={90}
            fill
            sizes='100vw'
            style={{ objectFit: 'cover', zIndex: -1 }}
          />
        
        <div id="upload-container" className="w-4/5 mx-auto min-h-max md:h-4/5 flex flex-col bg-slate-50 opacity-90 pb-4 border-4 border-transparent rounded-2xl">
          <div id="upload-container-headers" className='w-4/5 mx-auto px-8 pt-8'>
            <ul className='flex justify-between border-b-2 border-zinc-200  px-8'>
              <li className='text-center pb-2 border-b-secondary border-b-4'>
                <h5 className='text-xl font-semibold text-primary'>Upload Image</h5>
                <span className='text-xs'>Provide Clear OTC Medicine Image</span>
              </li>
              <li className='text-center pb-2'>
                <h5 className='text-xl font-semibold text-primary'>Select Mode</h5>
                <span className='text-xs'>On or Off Augmentation</span>
              </li>
              <li className='text-center pb-2'>
                <h5 className='text-xl font-semibold text-primary'>Check Output</h5>
                <span className='text-xs'>Hooray! Your Result is Here</span>
              </li>
            </ul>
          </div>
          <div id='upload-card' className="w-4/5 mx-auto px-8 grid place-items-center flex-grow">
            <ImageUploader />
          </div>
        </div>
      </section>
    </main>
  )
}
