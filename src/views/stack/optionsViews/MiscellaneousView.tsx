import { View } from "react-native";
import { miscellaneousViewStyle } from "../../../styles/OptionViewsStyles";
import { getSettingsByMenu, parseSettingsToComponents } from "../../utils/options";
import { useRecoilState } from "recoil";
import { MiscellaneousOptionsViewProps } from "../../../types";
import { settingsAtom } from "../../utils/atoms";

const MiscellaneousOptionsView = ({ navigation, route }: MiscellaneousOptionsViewProps) => {
  const [settings, setSettings] = useRecoilState(settingsAtom);

  const children = parseSettingsToComponents(getSettingsByMenu("Pozostałe", settings));
  return <View style={miscellaneousViewStyle.root}>{children}</View>;
};

export default MiscellaneousOptionsView;
