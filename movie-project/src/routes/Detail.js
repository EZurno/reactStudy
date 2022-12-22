import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // path 내의 value 값을 가져옴 => 여기선 :id 값
  console.log({ id });

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  /*
  !!!- Warring -!!! 
  
  useCallback을 사용해  id가 바뀔때만 
  getMovie 함수가 실행되게 하여 오남용을 방지 함

  useCallback이 없으면 계속해서 getMovie 함수를 만들며 새로운 참조값을 받기 때문에 warring
  
  https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/
  */
  return <h1>Detail</h1>;
}

export default Detail;
