'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../home/Header'
import greenRial from '@/public/images/greenRial.svg'
import Image from 'next/image'
import waIcon from '@/public/images/waIcon.svg'
import blueRial from '@/public/images/blueRial.svg'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export default function OrdersAnalysisWrapper({ id }) {
    const [title, setTitle] = useState('')
    const [refundModalStep, setRefundModalStep] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState(null);
    useEffect(() => {
        switch (id) {
            case 'day':
                setTitle('طلبات اليــوم المكتمله')
                break;
            case 'week':
                setTitle('طلبات الأسبوع المكتمله')
                break;
            case 'month':
                setTitle('طلبات الشهر المكتمله')
                break;
            case 'year':
                setTitle('طلبات السنة المكتمله')
                break;
            case 'total':
                setTitle('إجمالي الطلبات المكتمله')
                break;
            case 'completed_orders':
                setTitle('الطلبات المكتملة')
                break;
            case 'incompleted_orders':
                setTitle('الطلبات غير المكتملة')
                break;
            case 'whatsapp_completed_orders':
                setTitle("طلبات واتساب مكتملة")
                break;
            case 'whatsapp_incompleted_orders':
                setTitle("طلبات واتساب غير مكتملة")
                break;
            case 'refunded_orders':
                setTitle("طلبات مسترجعه")
                break;
            //تم التوثيـــق
            case 'verified':
                setTitle("تم التوثيـــق")
                break;
            default:
                setTitle('طلبات اليــوم المكتمله')
                break;
        }
    }, [id])

    const tableHeaders = [
        "رقــم الطلب",
        "رقــم جوال العميل",
        "نــوع العقــد",
        "نـوع الوثيقة",
        "الدفـــع",
        "مستلم منذ",
        "حــالة الطلب",
        "الاسـتلام",
        "الاجـــراءات",

    ];

    const tableData = [
        {
            id: 1,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "صك إلكــتروني",
            status: "قيد المعـالجة ..",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 2,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "وثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 3,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "وثيقة",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 4,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "صك ورقي",
            status: "تم تأكيد العقار",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 5,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "صك ورقي",
            status: "وثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 6,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "وثيقة عقارية",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 7,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "واثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 8,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "تجــاري",
            documentType: "تم تأكيد الطلب",
            status: "حجز استلام",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 9,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "تم تأكيد الطلب",
            status: "عقد إيجار من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 10,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "الاستلام",
            status: "واثيقة عقارية غير القياسية",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 11,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "طلب واستلام تعديل",
            status: "محتوى دفع من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        },
        {
            id: 12,
            orderNumber: "000001",
            phone: "997500013",
            contractType: "سكنـي",
            documentType: "محتوى دفع من العميل",
            status: "عقد إيجار من العميل",
            payment: "99.99",
            reciveDate: "منذ 10د",
            reciver: "ريـــان"
        }
    ];

    const getDocumentTypeClass = (type) => {
        const typeMap = {
            'صك إلكــتروني': 'bg-[#E6F7FF] text-[#0EA5E9]',
            'عقد إيجار': 'bg-[#FFF4E6] text-[#F59E0B]',
            'صك ورقي': 'bg-[#FFE6E6] text-[#EF4444]',
            'وثيقة عقارية': 'bg-[#E6FFE6] text-[#10B981]',
            'طلب واستلام تعديل': 'bg-[#FFF0E6] text-[#F97316]',
            'تم تأكيد العقار': 'bg-[#FFF0E6] text-[#F97316]',
            'الاستلام': 'bg-[#E6F2FF] text-[#3B82F6]',
            'تم تأكيد الطلب': 'bg-[#E6F2FF] text-[#3B82F6]',
            'عقد إيجار من العميل': 'bg-[#FFE6F5] text-[#EC4899]',
            'محتوى دفع من العميل': 'bg-[#FFE6F5] text-[#EC4899]'
        };
        return typeMap[type] || 'bg-[#F5F5F5] text-[#A3A3A3]';
    };

    const getStatusClass = (status) => {
        const statusMap = {
            'قيد المعـالجة ..': 'bg-[#E6F7FF] text-[#0EA5E9]',
            'تم تأكيد العقار': 'bg-[#E6FFE6] text-[#10B981]',
            'جديد استلام': 'bg-[#FFE6F5] text-[#EC4899]',
            'حجز استلام': 'bg-[#FFF4E6] text-[#F59E0B]',
            'عقد إيجار من العميل': 'bg-[#F3E6FF] text-[#A855F7]',
            'واثيقة عقارية غير القياسية': 'bg-[#FEF3E6] text-[#F59E0B]'
        };
        return statusMap[status] || 'bg-[#F5F5F5] text-[#A3A3A3]';
    };

    return (
        <div className="flex flex-col gap-6 p-6 min-h-screen" dir="rtl">
            <Header page='welcome' title={title} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" third={title} thirdURL={`/home/financial-analysis/${id}`} />
            
            <div className="w-full overflow-x-auto bg-white rounded-[24px] border border-[#E4E4E4] mt-4">
                <table className="w-full border-collapse">
                    <thead className="bg-[#FAFAFA]">
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className="text-right p-[15px_20px] text-[#A3A3A3] text-[13px] font-medium border-b border-[#E4E4E4] whitespace-nowrap">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id} className="border-b border-[#F5F5F5] last:border-0 hover:bg-[#fafafa] transition-all">
                                <td className="p-[15px_20px]">
                                    <div className="flex items-center justify-center gap-2 px-3 py-1.5 bg-[#f9f9f9] rounded-lg w-fit mx-auto border border-[#eee]">
                                        <span className="text-black text-[12px] font-bold">{row.orderNumber}</span>
                                        <button onClick={() => navigator.clipboard.writeText(row.orderNumber)} className="text-[#A3A3A3] hover:text-brand-main">
                                            <i className="fa-regular fa-copy text-[11px]"></i>
                                        </button>
                                    </div>
                                </td>
                                <td className="p-[15px_20px]">
                                    <div className="flex items-center gap-2">
                                        <span className="text-black text-[13px]">{row.phone}</span>
                                        <Link href={`https://wa.me/${row.phone}`} target="_blank" className="hover:scale-110 transition-all">
                                            <Image src={waIcon} alt="wa" width={16} height={16} />
                                        </Link>
                                    </div>
                                </td>
                                <td className="p-[15px_20px]">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${row.contractType === 'سكنـي' ? 'bg-[#F0E6FF] text-[#7C3AED]' : 'bg-[#FFE6F0] text-[#EC4899]'}`}>
                                        {row.contractType}
                                    </span>
                                </td>
                                <td className="p-[15px_20px]">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${getDocumentTypeClass(row.documentType)}`}>
                                        {row.documentType}
                                    </span>
                                </td>
                                <td className="p-[15px_20px]">
                                    <div className="flex items-center gap-1.5 text-[#007C13] font-bold text-[13px]">
                                        <span>{row.payment}</span>
                                        <Image src={greenRial} alt="rial" width={14} height={14} />
                                        <i className="fa-solid fa-circle-check text-[12px]"></i>
                                    </div>
                                </td>
                                <td className="p-[15px_20px] text-[#616161] text-[13px]">{row.reciveDate}</td>
                                <td className="p-[15px_20px]">
                                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${getStatusClass(row.status)}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="p-[15px_20px] text-black text-[13px] font-medium">{row.reciver}</td>
                                <td className="p-[15px_20px]">
                                    <DropdownMenu dir="rtl">
                                        <DropdownMenuTrigger asChild>
                                            <button className="w-8 h-8 rounded-full flex items-center justify-center text-[#4D4D4D] hover:bg-[#f5f5f5] transition-all">
                                                <i className="fa-solid fa-ellipsis-vertical text-[14px]"></i>
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-64">
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: قيد المعالجة')}>
                                                <span className="ml-2 text-xl">🧐</span>
                                                <span>قيد المعالجة</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: بينتظار تأكيد بيانات العقار')}>
                                                <span className="ml-2 text-xl">⏳</span>
                                                <span>بينتظار تأكيد بيانات العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: مطلوب اجراء من العميل')}>
                                                <span className="ml-2"><Image src={waIcon} alt="WhatsApp" width={20} height={20} /></span>
                                                <span>مطلوب اجراء من العميل</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: تم تأكيد العقار')}>
                                                <span className="ml-2 text-xl">🏡</span>
                                                <span>تم تأكيد العقار</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: بانتظار اعتماد العقد')}>
                                                <span className="ml-2 text-xl">😴</span>
                                                <span>بانتظار اعتماد العقد</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: تم التوثيق')}>
                                                <span className="ml-2 text-xl">✅</span>
                                                <span>تم التوثيق</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => { setSelectedOrder(row); setRefundModalStep(1); }}>
                                                <span className="ml-2 text-xl">😩</span>
                                                <span>مستردجع</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer" onClick={() => toast.success('تم تحديث حالة الطلب إلى: أخرى')}>
                                                <span className="ml-2 text-xl">🤔</span>
                                                <span>أخـرى</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#A3A3A3]"></i>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={() => toast.error('تم حذف الطلب')}>
                                                <span className="ml-2 text-xl">🗑️</span>
                                                <span>حذف الطلـب</span>
                                                <i className="fa-solid fa-chevron-left mr-auto text-[10px] text-[#EF4444]"></i>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-center gap-2.5 mt-4">
                <button className="w-9 h-9 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#A3A3A3] hover:bg-brand-main hover:text-white transition-all">
                    <i className="fa-solid fa-chevron-right text-[12px]"></i>
                </button>
                <button className="w-9 h-9 rounded-full bg-brand-main text-white flex items-center justify-center text-[13px] font-medium shadow-lg shadow-brand-main/20">1</button>
                <button className="w-9 h-9 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#A3A3A3] hover:bg-[#f5f5f5] transition-all text-[13px]">2</button>
                <span className="text-[#A3A3A3]">...</span>
                <button className="w-9 h-9 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#A3A3A3] hover:bg-[#f5f5f5] transition-all text-[13px]">40</button>
                <button className="w-9 h-9 rounded-full border border-[#E4E4E4] flex items-center justify-center text-[#A3A3A3] hover:bg-brand-main hover:text-white transition-all">
                    <i className="fa-solid fa-chevron-left text-[12px]"></i>
                </button>
            </div>
        </div>
    );
}