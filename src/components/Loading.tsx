import styled from "@emotion/styled";

const StyledLoading = styled.div`
    background-color: rgba(255, 255, 255, .8);
    z-index: 9999999999999999;
    inset: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    & {
    --w-size: 150px;
    --margin: var(--w-size / 2);
    --b-size: 70%; //This is % based on var(--w-size). Use any value you want (that makes sense) and any unit that you would like (test it)
    --box-wrapper-width: var(--b-size);
    --box-wrapper-height: var(--b-size);
    --box-wrapper-margin: calc((100% - #{var(--box-wrapper-height)})/2) calc((100% - #{var(--box-wrapper-width)})/2);

    //clip-path: inset() doesn't work on firefox and IE, if anyone feels like making it work with SVG clipping, please drop me a link in comments, would like to see it. :) 

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }


    .wrapper {
      position: absolute;
        /* left: 50%;
        top: 50%; */
        margin: var(--margin);
      width: var(--w-size);
      height: var(--w-size);
      background-color: transparent;
      border: none;
      -webkit-user-select: none;

      .box-wrap {
        width: var(--box-wrapper-width);
          height: var(--box-wrapper-height);
        margin: var(--box-wrapper-margin);
          position: relative;
          transform: rotate(-45deg);

        .box {
          width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
                background: rgba(135, 0, 0, .6);
            background: linear-gradient(to right, #39E079, #34D170, #31c268);
            background-position: 0% 50%;
            background-size: 1000% 1000%;
          visibility: hidden;

          &.one {
            animation:
                moveGradient 15s infinite,
                oneMove 3.5s infinite;
          }

          &.two {
            animation:
              moveGradient 15s infinite,
              twoMove 3.5s .15s infinite;
          }

          &.three {
            animation:
              moveGradient 15s infinite,
              threeMove 3.5s .3s infinite;
          }

          &.four {
            animation:
              moveGradient 15s infinite,
              fourMove 3.5s .575s infinite;
          }

          &.five {
            animation:
              moveGradient 15s infinite,
              fiveMove 3.5s .725s infinite;
          }

          &.six {
            animation:
              moveGradient 15s infinite,
              sixMove 3.5s .875s infinite;
          }
        }
    }
}

@keyframes moveGradient {

    to {
        background-position: 100% 50%
    }
}

@keyframes oneMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes twoMove {

    0% {
        visibility: visible;
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes threeMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(0% 70% 70% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 70% 35% 0 round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fourMove {

    0% {
        visibility: visible;
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
    71.4285% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes fiveMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}

@keyframes sixMove {

    0% {
        visibility: visible;
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    14.2857% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    28.5714% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    42.8571% {
        clip-path: inset(70% 0 0 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    57.1428% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    71.4285% {
        clip-path: inset(35% 0% 35% 70% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    85.7142% {
        clip-path: inset(35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }

    100% {
        clip-path: inset(70% 35% 0% 35% round 5%);
        animation-timing-function: cubic-bezier(0.86,  0,  0.07,  1);
    }
}
    }
`;
const Loading = () => {
    return (
        <StyledLoading>
            <div className="wrapper">
                <div className="box-wrap">
                    <div className="box one"></div>
                    <div className="box two"></div>
                    <div className="box three"></div>
                    <div className="box four"></div>
                    <div className="box five"></div>
                    <div className="box six"></div>
                </div>
            </div>
        </StyledLoading>
    );
}

export default Loading;