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
            src="https://thingspeak.com/channels/2701653/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line&xaxis=Time&yaxis=Temperature" />
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2701653/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line&xaxis=Time&yaxis=Humidity" />
          <iframe 
            width="450" 
            height="260" 
            className="rounded-2xl border-teal-500 border-[5px]"
            src="https://thingspeak.com/channels/2701653/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Number+of+Students&type=line&xaxis=Time&yaxis=Distance" />
        </div>
      </div>
    );
  };
  
  export default Data;