"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import Link from "next/link";
export default function Faq({ data, style, link, icon}) {

  
  return (
    <div>
        <Accordion
        itemClasses={style}>
        {data && data.map((faq, index) => (   
        <AccordionItem key={index} aria-label={faq.title} indicator={icon ? icon : ({ isOpen }) => (isOpen ? '-' : '+')} title={faq.title}>
            {faq.body}
            {link && <Link href={'/contact'} className=" block text-orange-10 mt-4">{link}</Link>}
        </AccordionItem>
    ))}
      </Accordion>

    
    </div>
    
  );
}
                                                        //  ({ isOpen }) => (isOpen ? '+' : '-')




