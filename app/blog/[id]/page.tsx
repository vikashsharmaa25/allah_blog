import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const blogPosts = [
    {
        id: 1,
        title: "Ramadan Ki Fazilat Aur Barkat",
        excerpt: "Ramadan ka mahina Allah ki rehmat aur maghfirat ka mahina hai.",
        content: `
Ramadan Mubarak! Yeh mubarak mahina sirf rozay aur bhookh-pyaas ka naam nahi,
balki is mahine mein Allah Ta’ala apne bandon par rehmaton aur barkaton ki baarish karte hain.

Is mahine mein har ek nek amal ka ajar 70 gunah zyada likha jata hai.
Fajr se maghrib tak roza rakhna sirf pet ko rokna nahi, balki 
zuban, aankh, kaan aur dil ko gunahon se bachana bhi roza ka ek hissa hai.

Ramadan ki asli rooh taqwa haasil karna hai.
Jo banda is mahine mein apni aadaton ko sudhar leta hai,
wo poore saal ibadat aur nek amal ki taraf zyada mustaqil rehta hai.

Taraweeh ki namaz, masjidon ki abadkari, Quran ki tilawat aur sadqaat-o-khairat
is mahine ki pehchaan hain. Aakhri ashra mein Laylatul Qadr ki talaash karna
bande ko Allah Ta’ala ke qareeb karta hai. Ye raat hazaar maheenon se behtar hai,
jis mein ibadat karna poore 83 saal ki ibadat ke barabar hai.
`
        ,
        author: "Maulana Ahmed Ali",
        date: "2025-03-15",
        category: "Ramadan",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        likes: 245,
        comments: 32
    },
    {
        id: 2,
        title: "Namaz Ka Tarika - Puri Jaankari",
        excerpt: "Namaz Islam ka sabse ahem rukn hai.",
        content: `
Namaz Islam ka doosra rukn hai aur musalman ki zindagi mein sabse zyada ahmiyat rakhti hai.
Namaz sirf farz ada karna nahi, balki Allah ke huzoor khushoo’ o khuzoo’ 
ke saath khade hona hai.

Namaz shuru karne se pehle wuzu ka mukammal tareeqa apnana chahiye:
pehle niyyat karein, phir haath dhoein, mooh aur naak saaf karein,
bahein aur paon dhone ke baad masah karein.

Namaz ke arkaan mein qiyaam, ruku, qawmah, sajdah aur jalsah shamil hain.
Har rakat mein hosh-o-hawaas ke saath Quran ki tilawat karna 
banday ko Allah ke qareeb karta hai.

Aaj ke zamane mein mobile aur duniya-dari ne tawajjo ko kamzor kar diya hai.
Is liye namaz mein dhyaan jama kar khade hona zaroori hai.
Jo banda apni namaz theek kar leta hai, uski zindagi theek ho jati hai.
`
        ,
        author: "Dr. Fatima Khan",
        date: "2025-03-10",
        category: "Ibadat",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&q=80&w=1170",
        likes: 189,
        comments: 45
    },
    {
        id: 3,
        title: "Quran Ki Tilawat Ke Adaab",
        excerpt: "Quran Majeed Allah ka kalam hai.",
        content: `
Quran Majeed Allah Ta’ala ka paak kalam hai jo insaan ki hidayat ke liye nazil kiya gaya.
Tilawat karne se pehle paak saaf hona, wuzu karna aur qibla ki taraf baithna mustahab hai.

Tilawat hamesha aahista, tajweed ke saath aur ghour-o-fikr karte hue karni chahiye.
Har ayat apne andar gehri ma’ani rakhti hai.
Jab banda ayat-e-azaab par guzarta hai to Allah se panaah maangta hai
aur jab ayat-e-rehmat par aata hai to Allah se dua karta hai.

Quran dilon ko sukoon deta hai, gham ko door karta hai,
aur zindagi ke mushkil faislon mein raasta dikhata hai.

Hadees mein aata hai ke jo banda rozana Quran ki tilawat karta hai,
us ka ghar noor se chamakta hai aur uske aamal mein barkat hoti hai.
`
        ,
        author: "Qari Muhammad Hassan",
        date: "2025-03-05",
        category: "Quran",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80",
        likes: 312,
        comments: 28
    },
    {
        id: 4,
        title: "Hajj Ki Tayyari - Complete Guide",
        excerpt: "Hajj har sahi musalman par farz hai.",
        content: `
Hajj Islam ka paanchwa farz hai jo har us musalman par farz hota hai
jo maali aur jismani haisiyat se qadir ho.

Hajj ki tayyari ek lambe safar ki tayyari jaisi hoti hai.
Pehle passport, visa aur vaccination ka intezam karein.
Phir ihram ke masail, tawaf, sa’ee aur waqf-e-Arafat ke ahkam ko 
achhi tarah samajhna bohot zaroori hai.

Hajj ek mujahida hai—gareebi, sakhti aur bheer mein sabr se kaam lena hota hai.
Is safar ka maqsad dil ko gunahon se saaf karna aur Allah ke qareeb hona hai.

Hajj ka har rukn apne andar ek paigham rakhta hai:
Ihram tawazo’ ka,
Tawaf Allah ke qurb ka,
Sa’ee koshish ka,
Aur Arafat maghfirat ka.

Jo banda mukammal hajj ada karta hai, 
wo gunahon se paak ho kar lautta hai jaise naya paida hua ho.
`
        ,
        author: "Haji Abdul Rahman",
        date: "2025-02-28",
        category: "Hajj",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
        likes: 276,
        comments: 56
    },
    {
        id: 5,
        title: "Zakat Ka Hisaab Aur Masail",
        excerpt: "Zakat Islam ke paanch arkan mein se ek hai.",
        content: `
Zakat Islam ke paanch arkan mein se ek ahem rukn hai.
Yeh sirf ek farz nahi, balki muashray mein insaaf aur barabari ka zariya hai.

Zakat us maal par farz hoti hai jo nisaab ke barabar ho
aur jis par poora saal guzar chuka ho.

Nisaab ka hisaab sone, chandi, nagad paison, business maal aur 
investments par lagaya jata hai. Aam tor par 2.5% 
nikala jata hai, lekin har cheez ki apni shari-ai tafseel hoti hai.

Zakat dene se maal kam nahi hota, balki barkat hoti hai—yeh Allah ka wada hai.
Zakat gareebon ka haq hai jo Allah ne ameeron ke maal me rakha hai.
Jo banda Zakat deta hai, Allah uske maal ko paak aur dil ko sukoon bakhshte hain.

Aaj ke digital zamane mein, Zakat ke liye accurate calculation apps aur tools
bhi istemal kiye ja sakte hain, lekin masail ke liye kisi mufti ya alim se
raabta bohot ahmiyat rakhta hai.
`
        ,
        author: "Mufti Khalid Saifullah",
        date: "2025-02-20",
        category: "Fiqh",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
        likes: 198,
        comments: 41
    },
    {
        id: 6,
        title: "Shab-e-Qadr Ki Fazilat",
        excerpt: "Laylatul Qadr hazaar maheenon se behtar hai.",
        content: `
Shab-e-Qadr Ramadan ke aakhri ashra ki odd raaton mein hoti hai 
aur is raat ki fazilat hazaar maheenon se behtar hai.

Is raat mein ki gayi ibadat ko Allah Ta’ala bohot pasand karte hain.
Farishte zameen par utarte hain aur har nek dua qubool hoti hai.
Allah Ta’ala apne bandon ko maghfirat aur ni’maton se nawazte hain.

Is raat ki talaash karne ke liye ibadat mein izafa karna chahiye:
Nafl namaz, Quran ki tilawat, istighfar, aur tasbeehat ki zyada pabandi karein.

Aap sallallahu alaihi wasallam ne aakhri ashra mein ibadat ko zyada barhaya
aur apni ahliyaat ko bhi ibadat ke liye tayyar kiya.

Shab-e-Qadr ek aisi raat hai jisme taqdeer likhi jati hai.
Agar banda is raat mein Allah ki taraf sachche dil se rujoo kare,
to uski poori zindagi badal sakti hai.
`,
        author: "Maulana Ahmed Ali",
        date: "2025-02-15",
        category: "Ramadan",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80",
        likes: 423,
        comments: 67
    }
];

export default function BlogDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    // ✅ NEW — unwrap the params Promise
    const { id } = React.use(params);

    const blogId = Number(id);

    // ✅ Find the blog
    const post = blogPosts.find((item) => item.id === blogId);

    if (!post) return notFound();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="grow">
                <div className="max-w-7xl mx-auto px-4 py-10">

                    {/* Banner */}
                    <img
                        src={post.image}
                        alt={post.title}
                        
                        className="w-full h-[500px] object-contain mb-8"
                    />

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center text-gray-600 gap-6 mb-6">
                        <p>✍️ {post.author}</p>
                        <p>📅 {post.date}</p>
                        <p>🏷️ {post.category}</p>
                        <p>⏱️ {post.readTime}</p>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                        {post.content}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 mt-10 text-gray-600">
                        <p>❤️ {post.likes} Likes</p>
                        <p>💬 {post.comments} Comments</p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
