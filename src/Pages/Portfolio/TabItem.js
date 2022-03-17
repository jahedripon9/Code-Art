import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div id="portfolio" className="flex flex-wrap lg:mx-10 mx-2">
        <div className="w-full lg:mx-10 mx-5">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-4">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                WEB
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-4">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 APP
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-4">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 DESIGN
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center my-4">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-black bg-" + color + "-600"
                    : "text-" + color + "-600 bg-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 ART
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
                    <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <div class="text-center lg:w-2/3 w-full">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Web developer a good career</h1>
                      <p class="mb-8 leading-relaxed">
                        Web development is amongst those jobs that have a significantly higher job satisfaction rate. There are several reasons that web developers are so satisfied with their jobs – salary, work-life balance, and flexibility, to name a few.</p>
                      
                    </div>
                  </div>
                </section>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <div class="text-center lg:w-2/3 w-full">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                      <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                      
                    </div>
                  </div>
                </section>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <div class="text-center lg:w-2/3 w-full">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                      <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                      
                    </div>
                  </div>
                </section>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <section class="text-gray-600 body-font">
                  <div class="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img class="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                    <div class="text-center lg:w-2/3 w-full">
                      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Is web developer a good career</h1>
                      <p class="mb-8 leading-relaxed">
                        Web development is amongst those jobs that have a significantly higher job satisfaction rate. There are several reasons that web developers are so satisfied with their jobs – salary, work-life balance, and flexibility, to name a few.</p>
                      
                    </div>
                  </div>
                </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="gray" />
    </>
  );
}