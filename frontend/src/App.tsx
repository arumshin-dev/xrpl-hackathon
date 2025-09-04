import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { NFT } from "./pages/NFT";

export type AccountResponse = {
  status: string;
  data: {
    account_address: string;
  };
};

export type ErrorResponse = {
  status: string;
  data: {
    code: string;
    message: string;
  };
};

function App() {
  // const { getFTsByIssuer } = useXrplAccount();
  // const [hasWallet, setHasWallet] = useState<boolean | null>(
  //   !!localStorage.getItem("userInfo")
  // );

  // // 친구 계정 생성 함수
  // const initializeFriends = useCallback(async () => {
  //   const friends = JSON.parse(localStorage.getItem("friends") || "[]");

  //   if (friends.length === 0) {
  //     try {
  //       const newFriends = [
  //         {
  //           nickname: "카이",
  //           address: "rJkNdbv3UfhFHpYA4Z43MT1kikM4cbzx3N",
  //           emoji: "😎",
  //           secret: "sEdVFQdrinmTnE4Crz3qw6NR7Q7rMBg",
  //         },
  //         {
  //           nickname: "리암",
  //           address: "rNo2tAqkdM7g189BjqV9USZo1PtaM6S27t",
  //           emoji: "🚀",
  //           secret: "sEdTk578DYn1tJCrmiePyNG7N1c4mCm",
  //         },
  //         {
  //           nickname: "준",
  //           address: "rp95ayUo6SkpVQqbGkr4wPK7SgDfUPUXjE",
  //           emoji: "🔥",
  //           secret: "sEdV9gPQcPZK6w3x4D7mipFVUbQaBuP",
  //         },
  //         {
  //           nickname: "해리",
  //           address: "rNsPBkhVGojfDZcZqYk3zX3xrJahYRbA1H",
  //           emoji: "🌟",
  //           secret: "sEd77AMoSqSM5ZMcxeivehqESarmo9h",
  //         },
  //         {
  //           nickname: "제이콥",
  //           address: "rJ9uCtzbGa14NuPYuhPxX1umBFjnzAQxhn",
  //           emoji: "🎮",
  //           secret: "sEdTrcU5S9Nv9TznFDgEBKErSHjCfpA",
  //         },
  //       ];
  //       // 로컬 스토리지에 저장
  //       localStorage.setItem("friends", JSON.stringify(newFriends));
  //       console.log("친구 계정 생성 완료:", newFriends);
  //     } catch (error) {
  //       console.error("친구 계정 생성 오류:", error);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   // 로컬스토리지에서 지갑 정보 확인
  //   const checkWalletExists = async () => {
  //     const userInfo = localStorage.getItem("userInfo");
  //     setHasWallet(!!userInfo);

  //     if (userInfo) {
  //       const userInfoObj = JSON.parse(userInfo);
  //       getSocketServer(userInfoObj.address);
  //       const result = await getFTsByIssuer(userInfoObj.address);
  //       console.log(result, "result");

  //       if (result.success) {
  //         localStorage.setItem("tokens", JSON.stringify(result.tokens));
  //       }
  //     }
  //   };

  //   checkWalletExists();
  //   initializeFriends(); // 친구 목록 초기화
  // }, [initializeFriends, getFTsByIssuer]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NFT />} />
        {/* <Route path="/wallet" element={<Wallet />} />
                      <Route
                        path="/transaction-history"
                        element={<TransactionHistory />}
                      />
                      <Route path="/friends" element={<FriendList />} />
                      <Route path="/nft" element={<NftAccount />} />
                      <Route path="/tickets" element={<TicketManager />} />
                      <Route path="/verify" element={<TicketVerifier />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
