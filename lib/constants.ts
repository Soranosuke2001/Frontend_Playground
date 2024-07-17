import { cervanttisFont, rolestFont, yujiSyukuFont } from "@/app/fonts"

export const navComponents: { title: string, href: string, description: string }[] = [
  {
    title: 'GSAP Scramble Text',
    href: '/animations/gsap/scramble-text/',
    description: 'Testing GSAP scramble text animations',
  },
]

export const fontComponents: { title: string, fontStyle: string }[] = [
  {
    title: "Rolest",
    fontStyle: rolestFont.className,
  },
  {
    title: "Cervanttis",
    fontStyle: cervanttisFont.className,
  },
  {
    title: "Yuji Syuku",
    fontStyle: yujiSyukuFont.className,
  },
]
