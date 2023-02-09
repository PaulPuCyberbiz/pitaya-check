import { i18n as I18n } from 'i18next';

import { FileData } from '@src/components/pitayas/PitayaFileInput';

declare global {
  interface Window {
    i18n: I18n;
    I18n: { locale: string };
    CKEDITOR: CKEDITOR;
    brand_url: string;
    info_warning: (s: string) => void;
    cyberBizPay: {
      init: (
        apiKey: string,
        signature: string,
        cssHash: { [key: string]: string },
      ) => void;
      getToken: () => Promise<CyberbizPayTokenParams>;
      getCardDataStatus: () => {
        status: number;
        canGetToken: boolean;
        validCardNumber: boolean;
        validExpire: boolean;
        validCvc: boolean;
      };
    };
  }
  interface CsrfMeta extends Element {
    content: string;
  }
}

// ckeditor types
export interface CKEDITOR {
  replace: (s: string, o: object) => Editor;
  instances: any;
}

export type Editor = {
  mode: string;
  editable: () => Editable;
  setData: (s?: string) => void;
  getData: () => string;
  on: (s: string, f: (e?: Editable) => void) => void;
};

export enum EditorEvent {
  key = 'key',
  change = 'change',
}

export type Editable = {
  name: EditorEvent;
  editor: Editor;
  attachListener: (e: Editable, s: string, f: () => void) => void;
};

export type Nullable<T> = T | null;
export type Voidable<T> = T | undefined;

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface OptionType<V = string, L = string> {
  label: L;
  value: V;
}

export interface GroupOptionType {
  label: string;
  options: OptionType[];
}

export type StringObjType = { [key: string]: any };

export enum ShopPluginCode {
  GLOBAL_FRONTEND_PAGE = 'global_frontend_page',
  POS = 'pos',
  HONEYCOMB = 'honeycomb',
  HONEYCOMB_SYNC = 'honeycomb_sync',
  PRODUCT_BIND_CHANNEL = 'product_bind_channel',
  PRODUCT_BIND_TEMPERATURE = 'product_bind_temperature',
  PRODUCT_BIND_SHIPPING = 'product_bind_shipping',
  SPECIAL_COLLECTION_DISCOUNT = 'special_collection_discount',
  SPECIAL_COLLECTION_PER_DISCOUNT = 'special_collection_per_discount',
  MIXED_TAX_EINVOICE = 'mixed_tax_einvoice',
  MIXED_TAX_EINVOICE_BASE_ON_AMOUNT = 'mixed_tax_einvoice_based_on_amount',
  VARIANT_MEAS = 'variant_meas',
  PRODUCT_PRICE_BONUS_ALLOW_DECIMAL = 'product_price_bonus_allow_decimal',
  GMO_CONTRACT_CUSTOMER = 'gmo_contract_customer',
  VIP_CUSTOM_PRICE = 'vip_custom_price',
  VIP_CUSTOM_PRICE_EXCEL = 'vip_custom_price_excel',
  PRODUCT_COST = 'product_cost',
  BONUS_MALL = 'bonus_mall',
  BUNDLE_DISCOUNT = 'bundle_discount',
  STORE_PICKUP = 'store_pickup',
  POS_STORE_PICKUP = 'pos_store_pickup',
  VARIANT_DISCOUNT_COLLECTION = 'variant_discount_collection',
  CATEGORY_CAMPAIGN = 'category_campaign',
  FACEBOOK_AD_DEPOSIT = 'facebook_ad_deposit',
  FACEBOOK_BUSINESS_EXTENSION2 = 'facebook_business_extension2',
  FACEBOOK_SHOP = 'facebook_shop',
  FACEBOOK_MESSENGER = 'facebook_messenger',
  PRODUCT_FEED_UPDATE_BUTTON = 'product_feed_update_button',
  FACEBOOK_CONVERSIONS_API = 'facebook_conversions_api',
  PRODUCT_CATEGORY = 'product_category',
  PRICE_ALLOW_DECIMAL = 'price_allow_decimal',
  FACEBOOK_OFFLINE_CONVERSION = 'facebook_offline_conversion',
  ADD_BUY = 'add-buy',
  ADD_BUY_PRODUCT = 'add_buy_product',
  P_COUPONS = 'p-coupons',
  PERCENT_COUPONS = 'percent_coupons',
  COUPON_RESTRICT_OTHER_DISCOUNT = 'coupon_restrict_other_discount',
  EXPRESS_DELIVERY = 'express_delivery',
  NEW_VIP_CARD = 'new_vip_card',
  PERIODIC_ORDER = 'perodic_order',
  STATEMENT_THRESHOLD = 'statement_threshold',
  BUNDLE_SHIPPING_RULE = 'bundle_shipping_rule',
  PARTIAL_WAREHOUSE = 'partial_warehouse',
  REFERRAL = 'referral',
  EXCLUDE_PRODUCT_FROM_SEARCH = 'exclude_product_from_search',
  ETICKET_SPECIAL_COLLECTION = 'eticket_special_collection',
  SEVEN = 'seven',
  OVERVIEW_BENCHMARK = 'overview_benchmark',
  SERIAL_NUMBER_GROUP_WITH_URL = 'serial_number_group_with_url',
  BONUS_POINT_EXPORT = 'bonus_point_export',
  ETICKET = 'eticket',
  PRODUCT_SORT_BY = 'product_sort_by',
  PRODUCT_FILTER = 'product_filter',
  POS_BONUS_MALL = 'pos_bonus_mall',
}

export type CollectionProduct = {
  id: number;
  position: number;
  productId: number;
  price: number;
  productType: string;
  title: string;
  vendor: string;
};

export enum ShopLanguages {
  DEFAULT_LANGUAGE = 'zh-TW',
  ZH_TW = 'zh-TW',
  EN = 'en',
}

export enum ShopLocation {
  Taiwan = 'Taiwan',
  Usa = 'USA',
  Japan = 'Japan',
}

export type InputMode =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'datetime';

export interface List<T> {
  items: T[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}
export type NonEmptyArray<T> = [T, ...T[]];

export enum Status {
  Scheduling = 'scheduling',
  InProgress = 'in_progress',
  Finished = 'finished',
  Pausing = 'pausing',
}
export type OptionalPartial<T, E extends keyof T> = Partial<T> & Pick<T, E>;

export enum SellStatus {
  Unlisted = 'unlisted', // 未上架
  OffMarket = 'off_market', // 已下架
  Launched = 'launched', // 已上架
}

export type Node = {
  type: string;
  name: string;
  children: Node[];
  next: Node;
  prev: Node;
  parent: Node;
  data: string;
  attribs: { [key: string]: string };
};
export enum Publicity {
  Published = 'published', // 公開
  Unpublished = 'unpublished', // 未公開
}

export type LoadingBarRef = {
  add(value: number): void;
  decrease(value: number): void;
  continuousStart(startingValue?: number, refreshRate?: number): void;
  staticStart(startingValue: number): void;
  complete(): void;
};

export enum ProductWarehouse {
  Honeycomb = 'honeycomb', // CYBERBIZ 電商倉儲
  CJ = 'cj', // 昶捷
  Amazon = 'amazon', // FBA
  Self = 'self', // 自行出貨
}

export enum PlanCategory {
  Global = 'global',
  Plus = 'plus',
  EnterpriseDoc = 'enterprise_doc',
}

// the precision for those shops that has plugin 'product_price_bonus_allow_decimal'
export const allowDecimalPrecision = 4;

export type CyberbizPayTokenParams = {
  data: { status: number; token: string; message: string };
  signature: string;
};

export enum GoogleAdsApplyStatus {
  NotApplied = 'not_applied',
  Applying = 'applying',
  Applied = 'applied',
}
