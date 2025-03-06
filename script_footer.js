document.addEventListener('DOMContentLoaded', function () {
  const twitterButton = document.getElementById('twitterButton'); // Twitter 버튼
  const twitterTooltip = document.getElementById('twitterTooltip'); // 툴팁 요소

  // 버튼 클릭 시 툴팁 표시
  twitterButton.addEventListener('click', function () {
    twitterTooltip.style.display = 'block'; // 툴팁 표시
  });

  // 버튼에서 마우스가 벗어날 때 툴팁 숨기기
  twitterButton.addEventListener('mouseleave', function () {
    twitterTooltip.style.display = 'none'; // 툴팁 숨기기
  });

  // 버튼 내에서 툴팁으로 이동 중에는 툴팁 유지
  twitterTooltip.addEventListener('mouseenter', function () {
    twitterTooltip.style.display = 'block'; // 툴팁 유지
  });

  // 툴팁에서 마우스가 벗어나면 툴팁 숨기기
  twitterTooltip.addEventListener('mouseleave', function () {
    twitterTooltip.style.display = 'none'; // 툴팁 숨기기
  });
});