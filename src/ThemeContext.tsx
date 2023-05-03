import { createContext, useState, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme; // 現在のテーマ（"light"または"dark"）
  toggleTheme: () => void; // テーマを切り替える関数
}

// createContextでThemeContextを作成する（デフォルト値：theme,toggleTheme）
export const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

//テーマ情報にアクセスする
export const useTheme = () => {
  return useContext(ThemeContext);
};

//子コンポーネントを受け取ってProviderでラップ
export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  //デフォルトはlight
  const [theme, setTheme] = useState<Theme>("light");

  //// テーマを切り替える関数
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //子コンポーネントにテーマ情報とテーマ切り替え関数を受け継ぐ
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
