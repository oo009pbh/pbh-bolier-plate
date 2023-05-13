import React from 'react';

export interface SIdeMenu {
    onChangeMenu: (index: number) => void;
    menuItem: Array<MEnuItem>;
    mode: string;
}
export interface MEnuItem {
    name: string;
    url: string;
    is_checked: boolean;
}

export interface MEssageList {
    messages: Array<MEssages>;
}

export interface MEssages {
    text: string;
    position: string;
}

export interface TImeLine {
    content: string;
    date: string;
    icon: string;
    title: string;
    index: number;
    animation: string;
}

export interface HEader {
    animationMode: string;
}

export interface CIrcle {
    percent: number;
    width: number;
    height: number;
    description: string;
    color: string;
}

export interface PRofileModal {
    isShowing: boolean;
    hide: React.MouseEventHandler<HTMLElement>;
}

export interface AVatar {
    size: number;
    className?: string;

    children?: React.ReactNode;
}

export interface LInk {
    github?: string;
    url?: string;
}

export interface PRojectCard {
    imageName: string;
    description?: string;
    title?: string;
    dedication?: string;
    skills?: string;
    link?: LInk;
}

export interface MEssageInput {
    onChangeMenu: (index: number) => void;
}