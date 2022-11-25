import React from 'react';

export type GithubLogoProps = {
  size: number;
  className?: string | undefined;
};

export default function GithubLogo(props: GithubLogoProps): JSX.Element {
  return (
    <svg
      className={props.className}
      width={props.size}
      height={props.size}
      viewBox="0 0 19 19"
      version="1.1"
      id="svg3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        id="path2"
        d="m 9.46,0.502 c -4.93,0 -8.928,3.997 -8.928,8.929 0,3.944 2.558,7.291
          6.106,8.472 0.447,0.081 0.609,-0.194 0.609,-0.431 C 7.247,17.26 7.24,16.699 7.235,15.954 4.752,16.493 4.228,14.757
          4.228,14.757 3.822,13.725 3.236,13.451 3.236,13.451 c -0.81,-0.554 0.062,-0.543 0.062,-0.543 0.896,0.063 1.367,0.92
          1.367,0.92 0.797,1.365 2.09,0.971 2.599,0.742 C 7.345,13.993 7.576,13.599 7.831,13.376 5.848,13.151 3.764,12.385
          3.764,8.964 3.764,7.989 4.112,7.192 4.683,6.568 4.591,6.342 4.284,5.434 4.77,4.205 c 0,0 0.75,-0.24 2.455,0.915
          0.712,-0.198 1.477,-0.297 2.236,-0.3 0.758,0.003 1.522,0.102 2.235,0.3 1.704,-1.155 2.453,-0.915 2.453,-0.915
          0.487,1.229 0.181,2.137 0.089,2.363 0.572,0.624 0.918,1.421 0.918,2.396 0,3.43 -2.088,4.184 -4.077,4.405 0.32,0.276
          0.606,0.821 0.606,1.654 0,1.194 -0.011,2.157 -0.011,2.449 0,0.239 0.161,0.517 0.614,0.43 3.545,-1.183 6.101,-4.528
          6.101,-8.471 0,-4.932 -3.998,-8.929 -8.929,-8.929 z"
      />
    </svg>
  );
}
