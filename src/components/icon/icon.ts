import { ReactComponent as ArrowDown } from "../../assets/icons/ArrowDown.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { ReactComponent as Phone } from "../../assets/icons/Phone.svg";
import { ReactComponent as VietnamFlag } from "../../assets/icons/VietnamFlag.svg";
import { ReactComponent as ChinaFlag } from "../../assets/icons/ChinaFlag.svg";
import { ReactComponent as JapanFlag } from "../../assets/icons/JapanFlag.svg";
import { ReactComponent as EnglandFlag } from "../../assets/icons/EnglandFlag.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as User } from "../../assets/icons/User.svg";
import { ReactComponent as Bag } from "../../assets/icons/Bag.svg";
import { ReactComponent as Location } from "../../assets/icons/Location.svg";
import { ReactComponent as Email } from "../../assets/icons/Email.svg";
import { ReactComponent as StarContained } from "../../assets/icons/Star-contained.svg";
import { ReactComponent as StarEmpty } from "../../assets/icons/Start-empty.svg";
import { ReactComponent as StarHalf } from "../../assets/icons/Star-half.svg";
import { ReactComponent as Eye } from "../../assets/icons/Eye.svg";
import { ReactComponent as Heart } from "../../assets/icons/Heart.svg";
import { ReactComponent as Category } from "../../assets/icons/Category.svg";
import { ReactComponent as Coin } from "../../assets/icons/Coin.svg";
import { ReactComponent as Vendor } from "../../assets/icons/Vendor.svg";
import { ReactComponent as Rating } from "../../assets/icons/Rating.svg";
import { ReactComponent as FirstPage } from "../../assets/icons/FirstPage.svg";
import { ReactComponent as LastPage } from "../../assets/icons/LastPage.svg";
import { ReactComponent as NextPage } from "../../assets/icons/NextPage.svg";
import { ReactComponent as PreviousPage } from "../../assets/icons/PrevPage.svg";
import { ReactComponent as Facebook } from "../../assets/icons/Facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/Google.svg";
import { ReactComponent as ShowPassword } from "../../assets/icons/ShowPassword.svg";
import { ReactComponent as HidePassword } from "../../assets/icons/HidePassword.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import { ReactComponent as Minus } from "../../assets/icons/Minus.svg";
import { ReactComponent as Bin } from "../../assets/icons/Bin.svg";
import { ReactComponent as Edit } from "../../assets/icons/Edit.svg";
import { ReactComponent as Key } from "../../assets/icons/Key.svg";
import { ReactComponent as Order } from "../../assets/icons/Order.svg";
import { ReactComponent as Send } from "../../assets/icons/Send.svg";
import { ReactComponent as Refresh } from "../../assets/icons/Refresh.svg";
import { ReactComponent as Cart } from "../../assets/icons/Cart.svg";
import { ReactComponent as Copy } from "../../assets/icons/Copy.svg";
import { ReactComponent as LocationEmpty } from "../../assets/icons/LocationEmpty.svg";
import { ReactComponent as PaymentMethod } from "../../assets/icons/PaymentMethod.svg";
import { ReactComponent as Tag } from "../../assets/icons/Tag.svg";
import { ReactComponent as Menu } from "../../assets/icons/Menu.svg";
import { ReactComponent as ArrowSlider } from "../../assets/icons/ArrowSlider.svg";

import { SVGProps } from "react";
import { IconName } from "@/type/iconName";

export const icons: Record<IconName, React.FC<SVGProps<SVGSVGElement>>> = {
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
  close: Close,
  phone: Phone,
  vietnamFlag: VietnamFlag,
  chinaFlag: ChinaFlag,
  japanFlag: JapanFlag,
  englandFlag: EnglandFlag,
  search: Search,
  user: User,
  bag: Bag,
  location: Location,
  email: Email,
  starContained: StarContained,
  starEmpty: StarEmpty,
  starHalf: StarHalf,
  eye: Eye,
  heart: Heart,
  arrowSlider: ArrowSlider,
  category: Category,
  coin: Coin,
  vendor: Vendor,
  rating: Rating,
  firstPage: FirstPage,
  lastPage: LastPage,
  nextPage: NextPage,
  previousPage: PreviousPage,
  facebook: Facebook,
  google: Google,
  showPassword: ShowPassword,
  hidePassword: HidePassword,
  plus: Plus,
  minus: Minus,
  bin: Bin,
  edit: Edit,
  key: Key,
  order: Order,
  send: Send,
  refresh: Refresh,
  cart: Cart,
  copy: Copy,
  locationEmpty: LocationEmpty,
  paymentMethod: PaymentMethod,
  tag: Tag,
  menu: Menu,
};
