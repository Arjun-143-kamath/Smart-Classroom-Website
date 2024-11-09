const Data = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto flex justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 text-center">
          Data from Sensors
        </h1>
      </div>
      
      <div className="max-w-[95vw] md:max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
        <iframe 
          className="w-full max-w-[450px] h-[260px] rounded-2xl border-teal-500 border-2 sm:border-3 md:border-4 lg:border-5"
          src="https://thingspeak.com/channels/2699577/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
        
        <iframe 
          className="w-full max-w-[450px] h-[260px] rounded-2xl border-teal-500 border-2 sm:border-3 md:border-4 lg:border-5"
          src="https://thingspeak.com/channels/2699577/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
        
        <iframe 
          className="w-full max-w-[450px] h-[260px] rounded-2xl border-teal-500 border-2 sm:border-3 md:border-4 lg:border-5"
          src="https://thingspeak.com/channels/2699577/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
        
        <iframe 
          className="w-full max-w-[450px] h-[260px] rounded-2xl border-teal-500 border-2 sm:border-3 md:border-4 lg:border-5"
          src="https://thingspeak.com/channels/2699577/widgets/961171" />
      </div>
    </div>
  );
};

export default Data;