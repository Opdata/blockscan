import { InnerWidth } from './CustomHook';

export default path => {
  const Width = InnerWidth();
  const Condition = path === 'blocks' ? true : false;
  //   width > 1024 ? null : { if() {} };
  const PixedWidth = [];

  if (Condition) {
    // block %
    if (Width < 1024) {
      PixedWidth.push('8%', '25%', '5%', '5%', '25%', null, null, '15%', '17%');
    } else if (Width < 1200) {
      PixedWidth.push('8%', '20%', '7%', '7%', '25%', '10%', null, '10%', '13%');
    } else {
      PixedWidth.push('8%', '15%', '7%', '7%', '20%', '10%', '10%', '10%', '13%');
    }
  } else {
    // tx %
    PixedWidth.push('14%', '7%', '17%', '18%', '18%', '17%', '9%', null, null);
  }

  return PixedWidth;
};
