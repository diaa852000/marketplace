/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {EditorContent, JSONContent, useEditor, type Editor} from '@tiptap/react'
import { Button } from './ui/button';
import StarterKit from '@tiptap/starter-kit'

export function MenuBar({editor}: {editor: Editor | null}) {
    if(!editor) return null;

    const handleHeadingOne = () => editor.chain().focus().toggleHeading({level: 1}).run();
    const handleHeadingTwo = () => editor.chain().focus().toggleHeading({level: 2}).run();
    const handleHeadingThree = () => editor.chain().focus().toggleHeading({level: 3}).run();
    const handleBold = () => editor.chain().focus().toggleBold().run();
    const handleItalic = () => editor.chain().focus().toggleItalic().run();
    const handleStrike = () => editor.chain().focus().toggleStrike().run();

    return (
        <div className='flex flex-wrap gap-5'>
            <Button 
                type='button' 
                onClick={handleHeadingOne}
                variant={editor.isActive("heading", {level: 1}) ? 'default' : 'secondary'}
            >
                H1
            </Button>
            <Button 
                type='button' 
                onClick={handleHeadingTwo}
                variant={editor.isActive("heading", {level: 2}) ? 'default' : 'secondary'}
            >
                H2
            </Button>
            <Button 
                type='button' 
                onClick={handleHeadingThree}
                variant={editor.isActive("heading", {level: 3}) ? 'default' : 'secondary'}
            >
                H3
            </Button>
            <Button 
                type='button' 
                onClick={handleBold}
                variant={editor.isActive("bold") ? 'default' : 'secondary'}
            >
                Bold
            </Button>
            <Button 
                type='button' 
                onClick={handleItalic}
                variant={editor.isActive("italic") ? 'default' : 'secondary'}
            >
                Italic
            </Button>
            <Button 
                type='button' 
                onClick={handleStrike}
                variant={editor.isActive("strike") ? 'default' : 'secondary'}
            >
                Strike
            </Button>
        </div>
    )
};

export function TipTapEditor(
    {setJson, json}: 
    {setJson: any, json: JSONContent | null}) 
{
    const editor = useEditor({
        extensions: [StarterKit],
        content: json,
        editorProps: {
            attributes: {
                class: 'focus:outline-none min-h-[150px] prose prose-sm sm:prose-base'
            },
        },
        onUpdate: ({editor}) => {
            setJson(editor.getJSON())
        }
    });

    return (
        <div>
            <MenuBar editor={editor}/>
            <EditorContent 
                editor={editor} 
                className='rounded-lg border p-2 min-h-[150px] mt-2'
            />
        </div>
    )
}
