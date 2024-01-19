import { useEffect, useState } from "react";

const Footer = () => {
  const [aia, setAia] = useState("");
  const aiat = [
    "يا أيها الناس اتقوا ربكم الذي خلقكم من نفس واحدة وخلق منها زوجها وبث منهما رجالا كثيرا ونساء واتقوا الله الذي تساءلون به والأرحام إن الله كان عليكم رقيبا",
    "قال إنما أشكو بثي وحزني إلى الله وأعلم من الله ما لا تعلمون",
    "إن هذا القرآن يهدي للتي هي أقوم ويبشر المؤمنين الذين يعملون الصالحات أن لهم أجرا كبيرا",
    "ولولا إذ دخلت جنتك قلت ما شاء الله لا قوة إلا بالله إن ترن أنا أقل منك مالا وولدا",
    "يا أيها الذين آمنوا لا تسألوا عن أشياء إن تبد لكم تسؤكم وإن تسألوا عنها حين ينزل القرآن تبد لكم عفا الله عنها والله غفور حليم",
    "ولا تحسبن الله غافلا عما يعمل الظالمون إنما يؤخرهم ليوم تشخص فيه الأبصار",
    "هو الذي أرسل رسوله بالهدى ودين الحق ليظهره على الدين كله ولو كره المشركون",
  ];

  useEffect(() => {
    setAia(aiat[Math.floor(Math.random() * aiat.length)]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setAia(aiat[Math.floor(Math.random() * aiat.length)]);
    }, 30000);
    return () => clearInterval(intervalID);
  }, [aia]);

  return (
    <div className="bg-greeny-gradient">
      <div className="wrapper sm:py-16 py-12 text-center sm:px-8">
        <p className="text-xl sm:text-2xl leading-loose text-white font-bold transition-all duration-300">
          {aia}
        </p>
      </div>
    </div>
  );
};

export default Footer;
