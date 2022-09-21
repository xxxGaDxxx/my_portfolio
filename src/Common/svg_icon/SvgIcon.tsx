import React from 'react';

type TitleH2SvgIconType = {
    icon: string
}

export const SvgIcon = ({icon}: TitleH2SvgIconType) => {
    switch (icon) {
        case 'about_me':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M36.6668 16.6667V25C36.6668 33.3334 33.3335 36.6667 25.0002 36.6667H15.0002C6.66683 36.6667 3.3335 33.3334 3.3335 25V15C3.3335 6.66671 6.66683 3.33337 15.0002 3.33337H23.3335"
                    stroke="#C4E300" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.6668 16.6667H30.0002C25.0002 16.6667 23.3335 15 23.3335 10V3.33337L36.6668 16.6667Z"
                      stroke="#C4E300" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6665 21.6666H21.6665" stroke="#C4E300" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.6665 28.3334H18.3332" stroke="#C4E300" stroke-width="2.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        case 'get_in_touch':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28.3335 34.1667H11.6668C6.66683 34.1667 3.3335 31.6667 3.3335 25.8334V14.1667C3.3335 8.33337 6.66683 5.83337 11.6668 5.83337H28.3335C33.3335 5.83337 36.6668 8.33337 36.6668 14.1667V25.8334C36.6668 31.6667 33.3335 34.1667 28.3335 34.1667Z"
                    stroke="#C4E300" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M28.3332 15L23.1165 19.1667C21.3998 20.5333 18.5832 20.5333 16.8665 19.1667L11.6665 15"
                      stroke="#C4E300" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        case 'portfolio':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.3327 36.6667H26.6661C33.3661 36.6667 34.5661 33.9833 34.9161 30.7167L36.1661 17.3833C36.6161 13.3167 35.4494 10 28.3327 10H11.6661C4.54939 10 3.38272 13.3167 3.83272 17.3833L5.08272 30.7167C5.43272 33.9833 6.63272 36.6667 13.3327 36.6667Z"
                    stroke="#C4E300" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M13.333 10V8.66671C13.333 5.71671 13.333 3.33337 18.6663 3.33337H21.333C26.6663 3.33337 26.6663 5.71671 26.6663 8.66671V10"
                    stroke="#C4E300" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M23.3337 21.6667V23.3333C23.3337 23.35 23.3337 23.35 23.3337 23.3667C23.3337 25.1833 23.317 26.6667 20.0003 26.6667C16.7003 26.6667 16.667 25.2 16.667 23.3833V21.6667C16.667 20 16.667 20 18.3337 20H21.667C23.3337 20 23.3337 20 23.3337 21.6667Z"
                    stroke="#C4E300" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M36.083 18.3334C32.233 21.1334 27.833 22.8 23.333 23.3667" stroke="#C4E300" stroke-width="2.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.36719 18.7833C8.11719 21.35 12.3505 22.9 16.6672 23.3833" stroke="#C4E300"
                      stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        case 'phone':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.6 18.95 8.51 18.02 7.47 16.99C6.44 15.95 5.51 14.86 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z"
                    stroke="#7B7B7B" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
        case 'email':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                      stroke="#7B7B7B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5" stroke="#7B7B7B" stroke-width="1.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        case 'telegram':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.40018 6.81997L15.8902 3.98997C19.7002 2.71997 21.7702 4.79997 20.5102 8.60997L17.6802 17.1C15.7802 22.81 12.6602 22.81 10.7602 17.1L9.92018 14.58L7.40018 13.74C1.69018 11.84 1.69018 8.72997 7.40018 6.81997Z"
                    stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.1099 14.15L13.6899 10.56" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'address':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18.5V15.5" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M10.0698 3.31997L3.13978 8.86997C2.35978 9.48997 1.85978 10.8 2.02978 11.78L3.35978 19.74C3.59978 21.16 4.95978 22.31 6.39978 22.31H17.5998C19.0298 22.31 20.3998 21.15 20.6398 19.74L21.9698 11.78C22.1298 10.8 21.6298 9.48997 20.8598 8.86997L13.9298 3.32997C12.8598 2.46997 11.1298 2.46997 10.0698 3.31997Z"
                    stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        case 'download':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V8L14 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M12 8L10 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z"
                    stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M5 12V7.99998C5 5.98998 5 4.32998 8 4.03998" stroke="#292D32" stroke-width="1.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 12V7.99998C19 5.98998 19 4.32998 16 4.03998" stroke="#292D32" stroke-width="1.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        case 'portfolio_circle':
            return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4"
                      d="M20.0002 36.6833C29.2049 36.6833 36.6668 29.2214 36.6668 20.0166C36.6668 10.8119 29.2049 3.34998 20.0002 3.34998C10.7954 3.34998 3.3335 10.8119 3.3335 20.0166C3.3335 29.2214 10.7954 36.6833 20.0002 36.6833Z"
                      fill="white"/>
                <path
                    d="M20 11.5667C16.55 11.5667 13.75 14.3666 13.75 17.8166C13.75 21.2 16.4 23.95 19.9167 24.05C19.9667 24.05 20.0333 24.05 20.0667 24.05C20.1 24.05 20.15 24.05 20.1833 24.05C20.2 24.05 20.2167 24.05 20.2167 24.05C23.5833 23.9333 26.2333 21.2 26.25 17.8166C26.25 14.3666 23.45 11.5667 20 11.5667Z"
                    fill="white"/>
                <path
                    d="M31.3002 32.2667C28.3335 35 24.3669 36.6834 20.0002 36.6834C15.6335 36.6834 11.6669 35 8.7002 32.2667C9.1002 30.75 10.1835 29.3667 11.7669 28.3C16.3169 25.2667 23.7169 25.2667 28.2335 28.3C29.8335 29.3667 30.9002 30.75 31.3002 32.2667Z"
                    fill="white"/>
            </svg>
        case 'experience':
            return <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.49983 22H16.4998C20.5198 22 21.2398 20.39 21.4498 18.43L22.1998 10.43C22.4698 7.99 21.7698 6 17.4998 6H7.49983C3.22983 6 2.52983 7.99 2.79983 10.43L3.54983 18.43C3.75983 20.39 4.47983 22 8.49983 22Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M8.5 6V5.2C8.5 3.43 8.5 2 11.7 2H13.3C16.5 2 16.5 3.43 16.5 5.2V6" stroke="white"
                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M14.5 13V14C14.5 14.01 14.5 14.01 14.5 14.02C14.5 15.11 14.49 16 12.5 16C10.52 16 10.5 15.12 10.5 14.03V13C10.5 12 10.5 12 11.5 12H13.5C14.5 12 14.5 12 14.5 13Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M22.15 11C19.84 12.68 17.2 13.68 14.5 14.02" stroke="white" stroke-width="1.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.12012 11.27C5.37012 12.81 7.91012 13.74 10.5001 14.03" stroke="white" stroke-width="1.5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        case 'education':
            return <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.55 2.53001L4.53002 6.46001C2.60002 7.72001 2.60002 10.54 4.53002 11.8L10.55 15.73C11.63 16.44 13.41 16.44 14.49 15.73L20.48 11.8C22.4 10.54 22.4 7.73001 20.48 6.47001L14.49 2.54001C13.41 1.82001 11.63 1.82001 10.55 2.53001Z"
                    stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M6.13012 13.08L6.12012 17.77C6.12012 19.04 7.10012 20.4 8.30012 20.8L11.4901 21.86C12.0401 22.04 12.9501 22.04 13.5101 21.86L16.7001 20.8C17.9001 20.4 18.8801 19.04 18.8801 17.77V13.13"
                    stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.8999 15V9" stroke="#121212" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        case 'skills':
            return <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.81993 13.28H9.90993V20.48C9.90993 21.54 11.2299 22.04 11.9299 21.24L19.4999 12.64C20.1599 11.89 19.6299 10.72 18.6299 10.72H15.5399V3.51997C15.5399 2.45997 14.2199 1.95997 13.5199 2.75997L5.94994 11.36C5.29994 12.11 5.82993 13.28 6.81993 13.28Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        case 'start_data':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.5V5.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M16 2.5V5.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M3.5 9.58997H20.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M21 9V17.5C21 20.5 19.5 22.5 16 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M15.6947 14.2H15.7037" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M15.6947 17.2H15.7037" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.9955 14.2H12.0045" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11.9955 17.2H12.0045" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.29431 14.2H8.30329" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.29431 17.2H8.30329" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'end_data':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.5V5.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M16 2.5V5.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M3.5 9.58997H20.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M22 19.5C22 20.25 21.79 20.96 21.42 21.56C20.73 22.72 19.46 23.5 18 23.5C16.99 23.5 16.07 23.13 15.37 22.5C15.06 22.24 14.79 21.92 14.58 21.56C14.21 20.96 14 20.25 14 19.5C14 17.29 15.79 15.5 18 15.5C19.2 15.5 20.27 16.03 21 16.86C21.62 17.57 22 18.49 22 19.5Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M16.4404 19.5L17.4304 20.49L19.5604 18.52" stroke="white" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M21 9V16.86C20.27 16.03 19.2 15.5 18 15.5C15.79 15.5 14 17.29 14 19.5C14 20.25 14.21 20.96 14.58 21.56C14.79 21.92 15.06 22.24 15.37 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path d="M11.9955 14.2H12.0045" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.29431 14.2H8.30329" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.29431 17.2H8.30329" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        case 'technologies':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
                <path
                    d="M2 13.38V11.62C2 10.58 2.85 9.72 3.9 9.72C5.71 9.72 6.45 8.44 5.54 6.87C5.02 5.97 5.33 4.8 6.24 4.28L7.97 3.29C8.76 2.82 9.78 3.1 10.25 3.89L10.36 4.08C11.26 5.65 12.74 5.65 13.65 4.08L13.76 3.89C14.23 3.1 15.25 2.82 16.04 3.29L17.77 4.28C18.68 4.8 18.99 5.97 18.47 6.87C17.56 8.44 18.3 9.72 20.11 9.72C21.15 9.72 22.01 10.57 22.01 11.62V13.38C22.01 14.42 21.16 15.28 20.11 15.28C18.3 15.28 17.56 16.56 18.47 18.13C18.99 19.04 18.68 20.2 17.77 20.72L16.04 21.71C15.25 22.18 14.23 21.9 13.76 21.11L13.65 20.92C12.75 19.35 11.27 19.35 10.36 20.92L10.25 21.11C9.78 21.9 8.76 22.18 7.97 21.71L6.24 20.72C5.33 20.2 5.02 19.03 5.54 18.13C6.45 16.56 5.71 15.28 3.9 15.28C2.85 15.28 2 14.42 2 13.38Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        case 'preview':
            return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 11.5L21.2 3.29999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M22.0002 7.3V2.5H17.2002" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M11 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5H15C20 22.5 22 20.5 22 15.5V13.5"
                      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


        default:
            return <svg></svg>
    }
};
