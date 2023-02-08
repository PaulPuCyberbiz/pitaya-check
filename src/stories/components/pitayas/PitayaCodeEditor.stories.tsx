import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';

import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { PitayaCodeEditor } from '@src/components/pitayas/PitayaCodeEditor';
import { Layout } from '@stories/Layout';

export default {
  title: 'Pitaya / Code Editor',
};

const code = `\`\`\`jsx
const Comp = () => (
  <PitayaCodeEditor
    code={code}
    language="handlebar"
  />
);
  \`\`\``;

export const General = () => {
  return (
    <Layout>
      <PitayaGroup className="col-lg-3 col-md-12">
        <h3>預設</h3>
        <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
      </PitayaGroup>
      <PitayaGroup className="col-lg-8 col-md-12">
        <PitayaCodeEditor languageName="handlebars" code={sampleCode} />
      </PitayaGroup>
    </Layout>
  );
};

const sampleCode = `
親愛的{{customer.name}}：

   您好,恭喜您已經在{{shop_name}}訂購商品成功!

   訂單編號：{{order_number}}。 {% if requires_shipping %}

   收件者資訊： {{ shipping_address.name}}：
              {{ shipping_address.country}} {{ shipping_address.province}} {{ shipping_address.city}} {{ shipping_address.district}} {{ shipping_address.address1}} {{ shipping_address.phone}} {% endif %}

   訂單商品明細： {% for line in line_items %}
              {{ line.quantity }} x {{ line.title }} 單價： {{ line.price | money }} {% endfor %}
    {% if discount_value > 0 %}
    促銷活動折抵:  {{ discount_value | money }}
    {% endif %}
    {% if bonus_consumed > 0 %}
    紅利折抵:  {{ bonus_consumed | money }}
    {% endif %}
    {% if coupon_value > 0 %}
    優惠券代碼折抵:  {{ coupon_value | money }}
    {% endif %}
     
   訂單總額： {{ total_price | money_with_currency }} ( 商品總額： {{ subtotal_price | money_with_currency }} {% if requires_shipping and shipping_rate %} | 出貨方式及運費： {{ shipping_name }} - {{ shipping_rate_price | money_with_currency }} {% endif %} )

   {% unless total_price == 0 %}
   付款方式： {{ gateway }}

    {% if cvs? %}
    超商付款代號: {{ CVS_ticket }}
    {% endif %}
    {% if custom_payment? %}
   若您是使用匯款或是其他非線上的付款方式，可以點擊以下連結來通知我們您已經付款
    {{ notify_url}}
    {% endif %}
   如果您尚未付款，請您盡快付款。您可以通過以下鏈接地址(複製到瀏覽器地址欄)返回訂單付款頁面：
   {{ pay_url }} {% endunless %}

 歡迎您再次到{{shop_name}}購物，祝您購物愉快！

`;
