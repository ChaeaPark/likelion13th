import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import { login } from '../apis/auth';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (!code) {
      alert('인가코드 없음');
      navigate('/login');
      return;
    }

    const kakaoLogin = async () => {
      try {
        const { accessToken, refreshToken } = await login(code);
        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        console.error('로그인 실패:', err);
        alert('로그인 실패');
        navigate('/login');
      }
    };

    kakaoLogin();
    console.log('카카오 인가코드:', code);
  }, [location.search, navigate, setTokens]);

  return <>로딩중...</>;
};

export default KakaoRedirectPage;
