import { Button } from '@/components/ui/button'
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
} from '@/components/ui/menubar'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'
import { useStateMachine } from 'little-state-machine'
import { updateColor } from '@/lib/ctx/actions'

export default function ActionBar() {
    const [colorSettingsOpen, toggleColorSettings] = useState(false)
    const [fontSettingsOpen, toggleFontSettings] = useState(false)

    const { actions, state } = useStateMachine({
        updateColor,
    })
    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Ladda ner</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>PDF</MenubarItem>
                        <MenubarItem>Word</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Ändra</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem onClick={() => toggleColorSettings(true)}>
                            Färg
                        </MenubarItem>
                        <MenubarItem>Font</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Mall</MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">
                                1337
                            </MenubarRadioItem>
                            <MenubarRadioItem value="benoit">
                                Zesam
                            </MenubarRadioItem>
                            <MenubarRadioItem value="Luis">
                                Clean
                            </MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Se alla...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <Sheet open={colorSettingsOpen}>
                <SheetTrigger asChild />
                <SheetContent className="w-[400px] sm:w-[540px] sheet-content">
                    <SheetHeader>
                        <SheetTitle>Färg</SheetTitle>
                        <SheetDescription>
                            Sätt färgen för temat. Notera att textfärgen inte
                            går att ändra i dagsläget.
                        </SheetDescription>
                        <HexColorPicker
                            color={state.color}
                            onChange={(e) => actions.updateColor({ color: e })}
                        />
                    </SheetHeader>
                    <SheetFooter className="mt-4">
                        <SheetClose asChild>
                            <Button
                                type="submit"
                                onClick={() => toggleColorSettings(false)}
                            >
                                Klar
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}
