import React, { useState } from 'react';
import { verifyPassword } from '@/utils/api/user/verifyPassword';

const PasswordVerification = () => {
  const [password, setPassword] = useState('');
  const [verificationResult, setVerificationResult] = useState<number | null>(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleVerifyPassword = async () => {
    const result = await verifyPassword(password);
    setVerificationResult(result);
  };

  return (
    <div className="password-verification">
      <h2>비밀번호 검증</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호를 입력하세요"
        className="border p-2 mb-4"
      />
      <button
        onClick={handleVerifyPassword}
        className="bg-blue-500 text-white p-2 rounded"
      >
        비밀번호 검증
      </button>
      {verificationResult !== null && (
        <div className="mt-4">
          {verificationResult === -1 ? (
            <p className="text-red-500">비밀번호 인증에 실패했습니다.</p>
          ) : (
            <p className="text-green-500">비밀번호 인증에 성공했습니다.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordVerification;
