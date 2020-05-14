import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Logo.module.scss";

const Logo: FC<HTMLAttributes<SVGSVGElement>> = ({ className }) => (
  <svg
    className={cn(className)}
    height="206px"
    width="206px"
    viewBox="0 0 206 206"
    focusable="false"
  >
    <title>react-md logo</title>
    <desc>
      The logo is similar to the React logo. It just contains the letters MD in
      the center of the nuclii.
    </desc>
    <defs>
      <path
        d="M80.2808838,84.7519527 C82.5435699,80.7340944 87.8842773,72.8554688 87.8842773,72.8554688 C87.8842773,72.8554688 99.6246338,72.2043457 106.188477,72.5073242 C112.752319,72.8103027 115.466309,72.8554688 115.466309,72.8554688 L124.566284,86.7357173 L129.299927,97.2778316 L127.64502,101.902832 L120.147705,115.724855 L115.971069,121.007448 C115.971069,121.007448 112.063222,122.222032 103.079834,121.894655 C98.4725235,121.726753 89.2279053,121.514162 89.2279053,121.514162 C89.2279053,121.514162 87.8588571,121.767914 87.3814697,121.382692 C86.2800404,120.493907 84.4914551,117.69214 84.4914551,117.69214 L77.3773193,104.530519 L73.7930908,97.2778316 C73.7930908,97.2778316 77.837027,89.0915163 80.2808838,84.7519527 Z"
        id="main-logo-path"
      />
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="main-logo-filter-1"
      >
        <feMorphology
          radius="1"
          operator="erode"
          in="SourceAlpha"
          result="shadowSpreadInner1"
        />
        <feGaussianBlur
          stdDeviation="0.5"
          in="shadowSpreadInner1"
          result="shadowBlurInner1"
        />
        <feOffset
          dx="1"
          dy="1"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowInnerInner1"
        />
      </filter>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="50%"
        y2="77.9815051%"
        id="main-logo-linear-gradient"
      >
        <stop stopColor="#000000" stopOpacity="0.239271966" offset="0%" />
        <stop stopColor="#000000" stopOpacity="0.080785779" offset="100%" />
      </linearGradient>
      <circle id="main-logo-circle-path" cx="101.5" cy="97.5" r="16.5" />
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="main-logo-filter-2"
      >
        <feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="0.5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <g transform="translate(2.000000, 2.000000)">
          <path
            className={styles.secondary}
            d="M37.5310519,102.213492 C37.7766264,107.899295 48.1487048,107.606281 49.6360766,112.730002 C50.5976088,116.042303 62.9132379,115.527258 64.0785615,118.717459 C65.2212894,121.845803 62.528936,128.715792 63.5098855,131.7769 C63.805749,132.700159 62.3798408,134.412997 62.2227914,135.646178 C61.8004793,138.96225 61.7816951,142.365377 62.7568185,144.507544 C66.6671114,153.097743 67.6391869,153.750048 77.4343335,156.068846 C79.8382416,156.637922 83.0599582,150.930858 87.3639981,152.297217 C89.4947161,152.973634 93.2971153,143.337991 95.5260846,145.664519 C97.6057403,147.835198 99.6364521,141.494063 101.000003,141.494063 C104.320552,141.494063 106.645078,146.990989 109.809864,146.835311 C112.671018,146.694569 118.667561,153.771704 121.392009,153.396529 C124.045358,153.031145 128.905146,156.000563 131.350017,155.281615 C135.504731,154.059865 139.365764,151.891616 140.844028,146.366706 C141.258111,144.8191 141.300339,141.106793 141.387508,136.751303 C141.426887,134.783703 139.655986,132.597498 141.106678,130.572676 C142.699338,128.3497 137.481272,121.088506 139.850605,118.717459 C142.861215,115.704672 149.946103,114.088718 154.283397,111.71501 C154.481796,111.606431 165.729453,107.264664 163.161625,105.023894 C161.298811,103.398343 171.656666,96.503859 166.46809,95.5039852 C164.711045,95.1653907 166.293699,88.7619409 163.161625,89.0074604 C160.634713,89.2055419 158.747387,82.0576356 155.500324,83.0924556 C153.110524,83.8540709 151.220323,78.0108464 148.710544,79.7117069 C146.716085,81.0633392 144.705958,74.3078714 142.795574,76.6026485 C142.399791,77.0780682 124.44407,71.5027453 118.270237,72.0693119 C115.463865,72.3268498 123.643335,78.3388046 121.982769,78.8813465 C119.607953,79.6572485 124.474983,82.6481023 124.233394,83.0924556 C123.042905,85.2821182 127.796486,88.2268917 128.220058,89.945956 C129.230681,94.0475619 131.570113,95.7136145 131.350017,96.2683895 C129.47285,100.999999 120.264604,116.959372 119.713894,118.05284 C119.282214,118.909965 119.268409,121.09711 116.520168,121.919745 C111.018655,123.566522 100.341766,123.571577 93.8961407,123.277327 C80.8148976,122.680154 78.5306529,107.933448 77.4343335,106.756514 C74.4034383,103.502753 74.866203,102.213492 72.9935223,98.5548389 C70.8103416,94.2895621 78.0219386,87.3601143 78.4421345,86.733443 C80.6306264,83.4695728 86.1417387,74.4910384 86.475002,73.5032489 C87.8727528,69.3603275 96.6268934,72.5482144 97.9169957,72.0693119 C102.52853,70.3574512 114.492588,73.3132389 117.585117,72.8130291 C120.677646,72.3128193 145.399024,79.179087 140.844028,75.6548374 C137.671644,73.2003296 144.36274,66.0086582 140.844028,63.6094196 C138.729494,62.1676214 143.358149,55.5134421 140.844028,54.3455951 C138.716819,53.3574744 141.026441,45.5728555 138.423946,44.9337261 C136.531656,44.4690112 135.051673,40.4187095 132.8484,40.2857012 C126.504967,39.9027577 126.327279,40.36548 118.991794,41.7777796 C115.467108,42.4563868 114.312918,46.100838 109.809864,46.7134135 C107.702197,47.0001311 104.9158,53.6691263 102.52853,53.5547311 C99.1069893,53.390775 96.7610352,50.41598 93.8961407,48.1005762 C91.1468213,45.87858 87.8374096,44.3230907 86.4750023,43.6776474 C84.5706367,42.7754502 82.3221893,41.6204938 79.3167572,40.793318 C76.3113251,39.9661422 75.797812,39.7199876 74.8662033,39.8103102 C69.6661099,40.3144768 68.1734437,43.3169696 64.0785618,44.9337261 C62.1598891,45.6912636 64.501306,69.4037739 62.7568188,70.3574512 C61.9981447,70.7722036 64.8217822,74.8992085 64.0785618,75.2526233 C57.9633448,78.1605208 51.872474,82.0743966 46.7345438,83.0924556 C43.1628132,83.8001789 41.3970581,87.4508809 39.153245,89.0074604 C37.4441016,90.1931284 37.3262839,92.9171926 36.3811002,95.5039852 C36.0001138,96.5466744 36.9444456,97.5551665 36.9444456,99.5850322 C36.9444456,100.519208 37.491122,101.288993 37.5310519,102.213492 Z"
          />
          <g>
            <use
              fillOpacity="0"
              fill="#03A9F4"
              fillRule="evenodd"
              xlinkHref="#main-logo-path"
            />
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#main-logo-filter-1)"
              xlinkHref="#main-logo-path"
            />
          </g>
          <path
            d="M77.8135174,71.7063587 C77.8135174,71.7063587 78.7773504,77.9498315 84.6713096,83.6740128 C87.3587517,86.284042 92.1465041,88.3832241 96.4380615,90.4441623 C97.8241653,91.1098121 107.460915,94.8402431 107.460915,94.8402431 C107.460915,94.8402431 105.228881,111.419498 105.230637,112.94604 C105.24089,121.854725 108.221922,129.760385 114.554237,130.395907 C120.712002,131.013911 120.793153,131.046762 126.14738,129.637108 C126.275722,129.603318 132.574618,125.771038 132.710788,125.753588 C135.851232,125.351159 145.239065,116.225537 145.239065,116.225537 C145.239065,116.225537 152.970743,123.428387 154.167251,123.428387 C155.363759,123.428387 173.424355,137.874874 182.339775,126.43795 C184.806979,123.272959 185.672883,120.557628 186.271156,118.221534 C187.263802,114.345523 186.847939,111.332391 186.847939,107.709929 C186.847939,101.90419 184.630966,93.5487626 184.630966,93.5487626 C190.466784,93.5487626 207.382378,82.657505 207.382378,82.657505 L210.556206,78.9512558 L212.713424,71.7063587 L210.556208,78.9512556 L192.224538,160.203972 L159.080424,172.505675 L135.342154,174.563605 C135.342154,174.563605 109.075595,168.229767 96.4380616,162.653479 C93.4703994,161.344004 87.9118288,158.238044 87.9118288,158.238044 L77.8135174,71.7063587 Z"
            fill="url(#main-logo-linear-gradient)"
            transform="translate(145.263471, 123.134982) rotate(-60.000000) translate(-145.263471, -123.134982) "
          />
          <ellipse
            stroke="#FFFFFF"
            strokeWidth="3"
            cx="101.5"
            cy="97"
            rx="65.5"
            ry="26"
          />
          <ellipse
            stroke="#FFFFFF"
            strokeWidth="3"
            transform="translate(101.630859, 97.326172) rotate(-60.000000) translate(-101.630859, -97.326172) "
            cx="101.630859"
            cy="97.3261719"
            rx="65.5"
            ry="26"
          />
          <ellipse
            stroke="#FFFFFF"
            strokeWidth="3"
            transform="translate(101.630859, 97.326172) rotate(-120.000000) translate(-101.630859, -97.326172) "
            cx="101.630859"
            cy="97.3261719"
            rx="65.5"
            ry="26"
          />
          <g>
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#main-logo-filter-2)"
              xlinkHref="#main-logo-circle-path"
            />
            <use
              fill="#FFFFFF"
              fillRule="evenodd"
              xlinkHref="#main-logo-circle-path"
            />
          </g>
          <text className={cn(styles.text, styles.secondary)} x="103" y="103">
            MD
          </text>
        </g>
        <ellipse
          stroke="#FFFFFF"
          strokeWidth="3"
          cx="103"
          cy="103"
          rx="100"
          ry="100"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
