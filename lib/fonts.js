// Headlines and text. next/font needs literal options in every call.
import { Bitter, Inter } from 'next/font/google';

const serif = Bitter({ subsets: ['latin'], display: 'swap', variable: '--f-serif' });
const sans = Inter({ subsets: ['latin'], display: 'swap', variable: '--f-sans' });

/** The two variable class names for <html>. */
export const fontClasses = `${serif.variable} ${sans.variable}`;
