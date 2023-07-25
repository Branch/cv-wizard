'use client'
import { jsPDF } from 'jspdf'
import Editor from '@/components/native/app/editor/editor'
import Preview from '@/components/native/app/preview/preview'
export default function App() {
    const generate = () => {
        const pdf = new jsPDF('portrait', 'pt', 'a4')
        const target = document.querySelector('#export-me')
        pdf.html(target as HTMLElement).then(() => {
            pdf.save('report.pdf')
        })
    }

    return (
        <>
            <div className="flex flex-col h-screen w-1/2 bg-white p-12">
                <Editor />
            </div>
            <div className="p-12">
                <Preview />
            </div>
        </>
    )
}
