'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import analysis from "@/public/images/analysis.svg";
import orders from "@/public/images/orders.svg";
import completedOrders from "@/public/images/completedOrders.svg";
import incompletedOrders from "@/public/images/incompletedOrders.svg";
import completedWaOrder from "@/public/images/completedWaOrder.svg";
import incompletedWaOrder from "@/public/images/incompletedWaOrder.svg";
import returnedOrder from "@/public/images/returnedOrder.svg";
import sortingOrders from "@/public/images/sortingOrders.svg";
import employees from "@/public/images/employees.svg";
import salaries from "@/public/images/salaries.svg";
import roles from "@/public/images/roles.svg";
import settings from "@/public/images/settings.svg";
import logout from "@/public/images/logout.svg";
import Link from "next/link";
export default function SideData() {
  const [active, setActive] = useState(false);
  return (
    <div className={`w-[309px] shrink-0 min-h-screen bg-[#F5F5F5] border-e border-[#e9e9e9] p-[45px_35px] relative transition-all duration-300 max-[1700px]:p-[30px_10px_10px] max-[1700px]:w-[245px] max-[1200px]:absolute max-[1200px]:inset-s-0 max-[1200px]:inset-y-0 max-[1200px]:z-[100] ${active ? 'max-[1200px]:translate-x-0' : 'max-[1200px]:translate-x-full'}`} id="side-data">
      <div className="absolute top-[80px] inset-inline-end-[-30px] cursor-pointer items-center justify-center w-[30px] h-[30px] rounded-s-[4px] bg-[#F5F5F5] hidden max-[1200px]:flex hover:bg-[#ddd] hover:text-white transition-all hover:scale-105 border border-transparent hover:border-brand-main" onClick={() => { setActive(!active) }}>
        <i className={`fa-solid ${active ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
      </div>
      <div className="flex items-center gap-2.5 mb-[25px] max-[1700px]:mb-5">
        <Link href="/"><Image src={logo} alt="Aakdi" className="w-[52px] h-[52px] rounded-full bg-white border border-black/10 flex items-center justify-center transition-all hover:bg-[#ddd] hover:text-white hover:scale-105 hover:border-brand-main p-3 object-contain" /></Link>
        <div>
          <h2 className="font-semibold text-[14px] text-black mb-[7px] max-[1700px]:text-[13px]">عقــدي لتقنيـــات العقــاريـة</h2>
          <h5 className="text-[12px] text-[#686868] font-normal">داشبـــورد</h5>
        </div>
      </div>
      <div className="mb-5 max-[1700px]:mb-2.5">
        <h3 className="text-[#686868] text-[12px] font-normal mb-2.5">الرئيســية </h3>
        <div className="flex flex-col gap-[5px]">
          <Link href="/home/analysis" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>التحليــلات</span><Image src={analysis} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
        </div>
      </div>
      <div className="mb-5 max-[1700px]:mb-2.5">
        <h3 className="text-[#686868] text-[12px] font-normal mb-2.5">العقــود </h3>
        <div className="flex flex-col gap-[5px]">
          <Link href="/home/orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>جميع الطلبات</span><Image src={orders} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/completed-orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>طلـب مكتمـــل</span><Image src={completedOrders} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/incolpleted-orders-analysis/total" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>طلـب غيــر مكتمل</span><Image src={incompletedOrders} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/orders-analysis/whatsapp_completed_orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>طلـب واتســـاب مكتمـــل </span><Image src={completedWaOrder} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/orders-analysis/whatsapp_incompleted_orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>طلـب واتسـاب  غير مكتمل</span><Image src={incompletedWaOrder} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/orders-analysis/refunded_orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>طلـب مستــرجع</span><Image src={returnedOrder} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/sorting-orders" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>تصنيــف الطلبـــــات</span><Image src={sortingOrders} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
        </div>
      </div>
      <div className="mb-5 max-[1700px]:mb-2.5">
        <h3 className="text-[#686868] text-[12px] font-normal mb-2.5">الموظفيــن والأدوار </h3>
        <div className="flex flex-col gap-[5px]">
          <Link href="/home/roles" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>الأدوار</span><Image src={roles} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/employees" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>الموظفيــن</span><Image src={employees} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/salaries" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>رواتــب الموظفيــن</span><Image src={salaries} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
        </div>
      </div>
      <div className="mb-5 max-[1700px]:mb-2.5">
        <h3 className="text-[#686868] text-[12px] font-normal mb-2.5">إعــدادت النظام</h3>
        <div className="flex flex-col gap-[5px]">
          <Link href="/home/settings" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>الاعــدادات</span><Image src={settings} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
          <Link href="/home/logout" className="h-12 rounded-[24px] bg-white text-[#424242] text-[14px] font-normal flex items-center justify-between gap-2.5 px-5 transition-all hover:bg-[#eee] hover:scale-105"><span>تسجيل الخـــروج</span><Image src={logout} alt="Aakdi" className="w-[15px] h-auto object-contain" /></Link>
        </div>
      </div>
    </div>
  );
}