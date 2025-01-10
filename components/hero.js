import Image from "next/image";
function Hero(){
    return <section className="w_full bg-gray-500 text-gray-200 flex flex-col items-center justify-center">
        <div className="p-3 w-50 h-50">
            <Image src="/images/myImage.png" alt="Image of a person"  width={200} height={200} className="rounded-full" />
        </div>
        <h1 className="font-extrabold text-4xl p-2">{`Hi, I'm Qurat Ul Ain Siddique`}</h1>
        <p className="w-80 text-center pb-2 ">I blog about Tech including developments and interesting things.</p>
    </section>
}
export default Hero;