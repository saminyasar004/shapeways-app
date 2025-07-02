import { View } from 'react-native';

const Separator = ({
  orientation,
  className,
}: {
  orientation: 'vertical' | 'horizontal';
  className?: string;
}) => {
  return (
    <View
      className={`bg-neutral-200 ${orientation === 'vertical' ? 'h-full w-1' : 'h-[1px] w-full'} ${className}`}></View>
  );
};

export default Separator;
