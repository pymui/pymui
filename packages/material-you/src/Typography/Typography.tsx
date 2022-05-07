import { Headline } from "../Headline";
import { DisplayTypography } from "../DisplayTypography";
import { BodyTypography } from "../BodyTypography";
import { TitleTypography } from "../TitleTypography";
import { LabelTypography } from "../LabelTypography";

const Typography = Object.assign(Headline, {
  Display: DisplayTypography,
  Body: BodyTypography,
  Title: TitleTypography,
  Label: LabelTypography,
});

export default Typography;
