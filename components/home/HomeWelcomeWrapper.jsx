'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import defaultUser from '@/public/images/defaultUser.jpg'
import logo from '@/public/images/logo.svg'
import waving from '@/public/images/waving.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomeWelcomeWrapper() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const router = useRouter();
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // Time format: 10:48 صبـاحا
            const formattedTime = new Intl.DateTimeFormat('ar-EG', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            }).format(now);

            // Date format: 11 / 10 / 2025
            const formattedDate = new Intl.DateTimeFormat('ar-EG', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
                .format(now)
                .replace(/\//g, ' / '); // Add spaces around slashes for your style

            setTime(formattedTime);
            setDate(formattedDate);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); // update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header page='welcome' title={null} isMain={true}
            // first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis"
            />
            <div className="[&>h1]:text-[24px] [&>h1]:font-bold [&>h1]:text-black [&>h1]:mb-[15px] [&>p]:text-[14px] [&>p]:text-[#363636] [&>p]:max-w-[567px] [&>p]:mb-[44px]">
                <h1>الإتقــان طريــق الخلــود في الأثــر ...</h1>
                <p>الإتقان ليس في كثرة العمل، بل في صدق النية وجودة الأداء. من يعمل بضمير يترك أثراً لا يُمحى، قال تعالى: ﴿لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا﴾ ‏. ‏العبرة، بمعيار الجودة ‏والإحسان، ﻻبالكثرة والقلة !</p>
                <div className="w-full max-w-[575px] rounded-[40px] bg-[#FBFBFB] border border-black/10 p-[59px] relative mx-auto mb-[50px] flex flex-col items-center justify-center">
                    <Image src={logo} alt="Aakdi" className="absolute top-10 inset-inline-end-10 w-9 h-auto object-contain" />
                    <Image src={defaultUser} alt="Aakdi" className="w-[112px] h-[112px] object-cover rounded-full overflow-hidden mx-auto mb-[15px]" />
                    <h3 className="text-[14px] font-bold text-black mb-[6px] text-center">أحمد عيد الله</h3>
                    <h4 className="text-[14px] font-normal text-[#4D4D4D] mb-[35px] text-center">مدير</h4>
                    <div className="flex flex-col items-center justify-items-center gap-[15px] mb-[35px]">
                        <h2 className="text-[24px] font-semibold text-black mb-0">{time}</h2>
                        <h5 className="text-[#363636] text-[14px] font-normal">{date}</h5>
                    </div>
                    <div className="flex flex-col items-center justify-items-center gap-[25px] mb-[35px]">
                        <Image src={waving} alt="Aakdi" className="w-[60px] h-auto object-contain" />
                        <h6 className="text-[32px] font-semibold text-brand-hover mb-0">مرحبـــــاً بعودتـــك, ريــان !.</h6>
                        <span className="text-[18px] font-normal text-[#363636]">مديــر</span>
                    </div>
                    <button className="flex items-center gap-[10px] h-[58px] px-[18px] rounded-[29px] bg-brand-hover text-white text-[14px] font-semibold transition-all hover:bg-brand-main" onClick={() => { router.push('/home/analysis') }}>
                        <i className='fa-solid fa-arrow-left'></i>
                        <span>يلا بســم الله</span>
                    </button>
                </div>
            </div>
        </>
    )
}

