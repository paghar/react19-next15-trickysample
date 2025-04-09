 
import { header } from "@data/constants/site-data";
import LogoBottom from "@components/icons/LogoBottom";
import Card from "@components/common/Card";
import { CardInfo } from "@data/constants/site-data";


export default function Home() {
  return (  
    <div className="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50  z-40 bg-blue-500ray-50" >
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">

          {/* header */}
          <div className="text-center">
            <div className="inline-flex px-4 py-1.5 mx-auto rounded-full">
              <p className="text-2xl font-semibold tracking-widest text-g uppercase">{header.title}</p>
            </div>
            <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">{header.description}</p>
          </div>

          
          <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
            {
              CardInfo.map((item,index)=>(
                <Card key={index} title={item.title} description={item.description} svg={item.svg}/>
              ))
            } 
          </div>

        </div>


        <div className="absolute -bottom-0 -left-1/4 z-0 opacity-10 ">       
          <LogoBottom/>
        </div>

      </div>
    
    </div>
    
  );
}
