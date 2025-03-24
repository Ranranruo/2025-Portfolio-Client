import { ReactElement, RefObject, useEffect, useRef } from "react";

const useContainer = () => {
    const ref: RefObject<HTMLElement | null> = useRef(null); // 초기값을 null로 설정
    useEffect(() => {
        console.log(ref.current);
        window.addEventListener("resize", () => {
            console.log(ref.current?.clientWidth);
        });
    },[]); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행

    return ref;
}

export default useContainer;
