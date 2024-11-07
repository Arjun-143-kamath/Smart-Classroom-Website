const Data = () => {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto flex justify-center">
          <h1 className="text-[50px] font-bold text-gray-800 mb-8">Data from Sensors</h1>
        </div>
        <div className="max-w-[90vw] mx-auto flex justify-center gap-3">
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2699577/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2699577/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2699577/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15" />
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2699577/widgets/961171" />
        </div>
      </div>
    );
  };
  
  export default Data;