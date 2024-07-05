import { useMemo, useState } from "react"

const useTheme = () => {
  const [themes, setThemes] = useState(localStorage.getItem("theme"))
  const themeConfig = useMemo(() => (
    {cssVar:true,algorithm: themes === "dark"?theme.darkAlgorithm:theme.defaultAlgorithm}
  ),[themes])
  if (themes === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark");
  } 
  return {
    themeConfig,
    setThemes,
    themes
  }

}
export default useTheme