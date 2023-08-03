'use client'

import Editor from '@/components/native/app/editor/editor'
import Preview from '@/components/native/app/preview/preview'
import ActionBar from '@/components/native/app/preview/actionBar'
export default function App() {
    return (
        <>
            <div className="flex flex-col h-full w-1/2 bg-white p-12">
                <Editor />
            </div>
            <div className="p-12 w-1/2 flex flex-col gap-4 justify-center items-center">
                <ActionBar />
                <Preview />
            </div>
        </>
    )
}
