import { cn } from '@/utils/cn';

import CategoriesDropdown from '@/components/guide/categories-dropdown';
import ChannelCategoriesSidebar from '@/components/guide/categories-sidebar';

const CategoriesContainer = () => {
  return (
    <div
      className={cn(
        `hide-scrollbar my-3 flex w-full justify-center bg-primary-void`,
        `tablet:h-full tablet:w-[250px] tablet:min-w-[250px] tablet:flex-col tablet:justify-start 
        tablet:overflow-y-auto tablet:p-2 tablet:pb-10 tablet:pt-9`
      )}
    >
      <CategoriesDropdown />
      <ChannelCategoriesSidebar />
    </div>
  );
};

export default CategoriesContainer;
