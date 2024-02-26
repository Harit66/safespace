import React from "react";

const NavTabs = () => {
    return (
        <>
            <div className={'flex item-center pt-[10px] pb-0 px-[10px] relative w-[1072px] bg-white boeder-b [border-bottom-style:solid] border-lightsolid-colorextradivider shadow-[0px_4px_2px_#a5a3ae4c] ${className}'}>
                <div className="rounded-[6px_0px_0px_0px] overflow-hidden boeder-b-2 [border-bottom-style:solid] border=[#348ca8] inline-flex item-center justify-center gap=[10px] px-[20px] py-[8px] relative flex-[0_0_auto]">
                    <div className="mt-[-2.00px] text-[#348ca8] relative w-fit [font-family: 'public_Sans-Regular',Helvetica] font-noraml text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Task
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] relative fex-[0_0_auto]">
                    <div className="mt-[=1.00px] text-[#6a707c] relative w-fit [font-family: 'public_Sans-Regular',Helvetica] font-noraml text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Team
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] relative fex-[0_0_auto]">
                    <div className="mt-[=1.00px] text-[#6a707c] relative w-fit [font-family: 'public_Sans-Regular',Helvetica] font-noraml text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Comments
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[8px] relative fex-[0_0_auto]">
                    <div className="mt-[=1.00px] text-[#6a707c] relative w-fit [font-family: 'public_Sans-Regular',Helvetica] font-noraml text-[18px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Attachments
                    </div>
                </div>
            </div>

            {/* new section  */}

            <div className="flex flex-coll h-[696.0.px] item-start gap[26px] relative">
                <div className="gap-[26px] self-stretch w-full flex-[0_0_auto] flex items-start relative">
                    <div className="flex-col gap-[16px] flex-1 grow rounded-[6px] flex items-start relative">
                        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative flex-1 mt-[-1.00px] font-light-basic-typography-h5-heading font-[number:var(--light-basic-typography-h5-heading-font-weight)] text-lighttypography-clolorheading-text text-[length:var(--light-basic-typography-h5-heading-font-size)] tracking-[var(--light-ypography-h5-heading-letter-spacing)] leading-[var(--light-basic-typography-h5-heading-line-height)] [font-style:var(--light-basic-typography-h5-heading-font-style)]">
                                New Tasks
                            </div>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="dots-vertical">
                                    <g id="Oval">
                                        <circle cx="10.1673" cy="10.0003" r="0.833333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="10.1673" cy="10.0003" r="0.833333" stroke="white" stroke-opacity="0.1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <g id="Oval_2">
                                        <circle cx="10.1673" cy="15.8333" r="0.833333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="10.1673" cy="15.8333" r="0.833333" stroke="white" stroke-opacity="0.1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <g id="Oval_3">
                                        <ellipse cx="10.1673" cy="4.16634" rx="0.833333" ry="0.833333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <ellipse cx="10.1673" cy="4.16634" rx="0.833333" ry="0.833333" stroke="white" stroke-opacity="0.1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="flex items-center px-[16px] py-0 relative self-stretch w-full flex-[0-0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-light-basic-typography-paragraphy-small font-[number:var(--light-basic-typography-paragraphy-small-font-weight)] text-lighttypography-colorbody-text text-[length:var(--light-basic-typography-paragraphy-small-font-size)] tracking-[var(--light-basic-typography-paragraphy-small-letter-spacing)] leading-[var(--light-basic-typography-paragraphy-small-line-height)] [font-style:var(--kight-basic-typography-paragraphy-small-font-style)]">
                                + Add New Task
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-loghtsolid-colorextracard-background rounded-[6px] shadow-light-gray-card">
                            <div className="bg-lightopacity-colorsucesssucess-16 inline-flex items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] rounded-[20px]">
                                <div className="relative w-fit mt-[-1.00px] font-light-basic-typography-paragraphy-small-semi-bold font-[number:var(--light-basic-typography-paragraphy-small-semi-bold-font-weight)] text-lightsolid-colorsucesssucess-500-base text-[lenght:var(--light-basic-typography-pragraphy-small-semi-bold-font-size)] tracking-[var(--light-basic-typography-paragraphy-small-semi-bold-letter-spacing)] leading-[var(--light-basic-typography-paragraphy-samll-semi-bold-line-height)] whitespace-nowrap [font--style:var(--light-basic-typography-paragraphy-small-semi-bold-font-style)]">
                                    Check CCTV Footage
                                </div>
                            </div>
                            <div className="relative self-stretch font-light-basic-typography-praragraphy font-[number:var(--light-basic-typography-paragraphy-font-weight)] text-lighttypography-colorbody-text text-[length:var(--light-basic-typography-paragraphy-font-size)] tracking-[-var(--light-basic-typography-paragraphy-letter-spacing)] leading-[var(--light-basic-typography-paragraphy-line-height)] [font-style:var(--light-basic-typography-paragraph-font-style)]">
                                Brief task summery
                            </div>
                            <div className="flex items-center gap-[10px] relative self-stretch w-full flex-[0_0_autio]" >
                                <div className="flex items-start gap-[12px] relative flex-1 grow">
                                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="paperclip">
                                                <g id="Path">
                                                    <path d="M12.8332 5.83339L7.41658 11.2501C6.72623 11.9404 6.72623 13.0597 7.41658 13.7501C8.10694 14.4404 9.22623 14.4404 9.91658 13.7501L15.3332 8.33339C16.714 6.95267 16.714 4.7141 15.3332 3.33339C13.9525 1.95267 11.714 1.95267 10.3332 3.33339L4.91658 8.75005C2.84551 10.8211 2.84551 14.179 4.91658 16.2501C6.98765 18.3211 10.3455 18.3211 12.4166 16.2501L17.8332 10.8334" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.8332 5.83339L7.41658 11.2501C6.72623 11.9404 6.72623 13.0597 7.41658 13.7501C8.10694 14.4404 9.22623 14.4404 9.91658 13.7501L15.3332 8.33339C16.714 6.95267 16.714 4.7141 15.3332 3.33339C13.9525 1.95267 11.714 1.95267 10.3332 3.33339L4.91658 8.75005C2.84551 10.8211 2.84551 14.179 4.91658 16.2501C6.98765 18.3211 10.3455 18.3211 12.4166 16.2501L17.8332 10.8334" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="relative w-fit mt-[-1.00px] font-light-basic-typography-paragraph font-[number:var(--light-basic-typography-paragraph-font-weight)] text-lighttypography-colorbody-text text-[length:var(--light-basic-typography-paragraph-font-size)] tracking-[var(--light-basic-typography-paragraph-letter-spacing)] leading-[var(--light-basic-typography-paragraph-line-height)] whitespace-nowrap [sont-style:var(--light-basic-typography-paragraph-font-style)]">
                                            4
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="message-dots">
                                                <g id="Path">
                                                    <path d="M3.66602 17.5003V6.66699C3.66602 5.28628 4.7853 4.16699 6.16602 4.16699H14.4993C15.8801 4.16699 16.9993 5.28628 16.9993 6.66699V11.667C16.9993 13.0477 15.8801 14.167 14.4993 14.167H6.99935L3.66602 17.5003" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M3.66602 17.5003V6.66699C3.66602 5.28628 4.7853 4.16699 6.16602 4.16699H14.4993C15.8801 4.16699 16.9993 5.28628 16.9993 6.66699V11.667C16.9993 13.0477 15.8801 14.167 14.4993 14.167H6.99935L3.66602 17.5003" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <g id="Path_2">
                                                    <path d="M10.3327 9.16641V9.17474" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10.3327 9.16641V9.17474" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <g id="Path_3">
                                                    <path d="M6.99967 9.16641V9.17474" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.99967 9.16641V9.17474" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <g id="Path_4">
                                                    <path d="M13.6667 9.16641V9.17474" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M13.6667 9.16641V9.17474" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="relative w-fit mt-[-1.00px] font-light-basic-typography-paragraph font-[number:var(--light-basic-typography-paragraph-font-weight)] text-lighttypography-colorbody-text text-[length:var(--light-basic-typography-paragraph-font-size)] tracking-[var(--light-basic-typography-paragraph-letter-spacing)] leading-[var(--light-basic-typography-paragraph-line-height)] whitespace-nowrap [sont-style:var(--light-basic-typography-paragraph-font-style)]">
                                            12
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-flex items-start relative flex-[0_0_auto]">
                                    <div className="relative w-[30px] h-[30px]  mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] rounded-[100px] overflow-hidden border-2 border-solid border-lightsolid-colorextracard-background">
                                        <div className="relative w-[26px] h-[26px]">
                                            <div className=" absolute w-[26px] h-[26px] top-0 left-0 bg-lightsolid-colordangerdanger-400">
                                                <div className="relative w-[21px] h-[21px] top-[3px] left-0 bg-[#ffffff4c] rounded-[100px]">
                                                </div>
                                                <img></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default NavTabs;