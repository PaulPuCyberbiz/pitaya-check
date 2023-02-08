import React from 'react';

import { Add } from '@src/components/pitayas/pitayaIcons/Add';
import { Unpublished } from '@src/components/pitayas/pitayaIcons/Unpublished';
import { Published } from '@src/components/pitayas/pitayaIcons/Published';
import { Edit } from '@src/components/pitayas/pitayaIcons/Edit';
import { Delete } from '@src/components/pitayas/pitayaIcons/Delete';
import { GoToPage } from '@src/components/pitayas/pitayaIcons/GoToPage';
import { Copy } from '@src/components/pitayas/pitayaIcons/Copy';
import { QuestionMark } from '@src/components/pitayas/pitayaIcons/QuestionMark';
import { Preview } from '@src/components/pitayas/pitayaIcons/Preview';
import { Draggable } from '@src/components/pitayas/pitayaIcons/Draggable';
import Desktop from '@src/components/pitayas/pitayaIcons/Desktop';
import Tablet from '@src/components/pitayas/pitayaIcons/Tablet';
import Mobile from '@src/components/pitayas/pitayaIcons/Mobile';
import { Search } from '@src/components/pitayas/pitayaIcons/Search';
import { Import } from '@src/components/pitayas/pitayaIcons/Import';
import { Download } from '@src/components/pitayas/pitayaIcons/Download';
import Linked from '@src/components/pitayas/pitayaIcons/Linked';
import Unlinked from '@src/components/pitayas/pitayaIcons/Unlinked';
import { Snippets } from '@src/components/pitayas/pitayaIcons/Snippets';
import EnableSms from '@src/components/pitayas/pitayaIcons/EnableSms';
import DisableSms from '@src/components/pitayas/pitayaIcons/DisableSms';
import Warning from '@src/components/pitayas/pitayaIcons/Warning';
import { Pencil } from '@src/components/pitayas/pitayaIcons/Pencil';
import LargeSearch from '@src/components/pitayas/pitayaIcons/LargeSearch';
import Hamburger from '@src/components/pitayas/pitayaIcons/Hamburger';
import Others from '@src/components/pitayas/pitayaIcons/Others';
import { Member } from '@src/components/pitayas/pitayaIcons/Member';
import { Bell } from '@src/components/pitayas/pitayaIcons/Bell';
import { ActiveBell } from '@src/components/pitayas/pitayaIcons/ActiveBell';
import { HelpCenter } from '@src/components/pitayas/pitayaIcons/HelpCenter';
import Pos from '@src/components/pitayas/pitayaIcons/Pos';
import EcStore from '@src/components/pitayas/pitayaIcons/EcStore';
import Navigation from '@src/components/pitayas/pitayaIcons/Navigation';
import Slider from '@src/components/pitayas/pitayaIcons/Slider';
import Banner from '@src/components/pitayas/pitayaIcons/Banner';
import Collection from '@src/components/pitayas/pitayaIcons/Collection';
import Tabs from '@src/components/pitayas/pitayaIcons/Tabs';
import Footer from '@src/components/pitayas/pitayaIcons/Footer';
import Product from '@src/components/pitayas/pitayaIcons/Product';
import Text from '@src/components/pitayas/pitayaIcons/Text';
import Video from '@src/components/pitayas/pitayaIcons/Video';
import { AddCircle } from '@src/components/pitayas/pitayaIcons/AddCircle';
import Blog from '@src/components/pitayas/pitayaIcons/Blog';
import Article from '@src/components/pitayas/pitayaIcons/Article';
import Leave from '@src/components/pitayas/pitayaIcons/Leave';
import { Document } from '@src/components/pitayas/pitayaIcons/Document';
import GeneralPage from '@src/components/pitayas/pitayaIcons/GeneralPage';
import { Language } from '@src/components/pitayas/pitayaIcons/Language';
import { Html } from '@src/components/pitayas/pitayaIcons/Html';
import { Undo } from '@src/components/pitayas/pitayaIcons/Undo';
import { Redo } from '@src/components/pitayas/pitayaIcons/Redo';
import DisplayDefault from '@src/components/pitayas/pitayaIcons/DisplayDefault';
import DisplayPartial from '@src/components/pitayas/pitayaIcons/DisplayPartial';
import DisplayAll from '@src/components/pitayas/pitayaIcons/DisplayAll';
import { Game } from '@src/components/pitayas/pitayaIcons/Game';
import { Cancel } from '@src/components/pitayas/pitayaIcons/Cancel';
import RowNav from '@src/components/pitayas/pitayaIcons/RowNav';
import DefaultNav from '@src/components/pitayas/pitayaIcons/DefaultNav';
import { ShiningStar } from '@src/components/pitayas/pitayaIcons/ShiningStar';
import List from '@src/components/pitayas/pitayaIcons/List';
import ContactInfo from '@src/components/pitayas/pitayaIcons/ContactInfo';
import CustomText from '@src/components/pitayas/pitayaIcons/CustomText';
import FooterVertical from '@src/components/pitayas/pitayaIcons/FooterVertical';
import FooterHorizontal from '@src/components/pitayas/pitayaIcons/FooterHorizontal';
import TopPosition from '@src/components/pitayas/pitayaIcons/TopPosition';
import MidPosition from '@src/components/pitayas/pitayaIcons/MidPosition';
import BottomPosition from '@src/components/pitayas/pitayaIcons/BottomPosition';
import Down from '@src/components/pitayas/pitayaIcons/Down';
import ThreeDimensionMenu from '@src/components/pitayas/pitayaIcons/ThreeDimensionMenu';
import TwoDimensionMenu from '@src/components/pitayas/pitayaIcons/TwoDimensionMenu';
import Filter from '@src/components/pitayas/pitayaIcons/Filter';
import BoldText from '@src/components/pitayas/pitayaIcons/BoldText';
import ItalicText from '@src/components/pitayas/pitayaIcons/ItalicText';
import UnderlineText from '@src/components/pitayas/pitayaIcons/UnderlineText';
import BulletList from '@src/components/pitayas/pitayaIcons/BulletList';
import NumberedList from '@src/components/pitayas/pitayaIcons/NumberedList';
import AlignLeft from '@src/components/pitayas/pitayaIcons/AlignLeft';
import AlignCenter from '@src/components/pitayas/pitayaIcons/AlignCenter';
import AlignRight from '@src/components/pitayas/pitayaIcons/AlignRight';
import Title from '@src/components/pitayas/pitayaIcons/Title';
import Button from '@src/components/pitayas/pitayaIcons/Button';

export type IconType =
  | 'add'
  | 'addCircle'
  | 'published'
  | 'unpublished'
  | 'goToPage'
  | 'delete'
  | 'copy'
  | 'edit'
  | 'goToPage'
  | 'questionMark'
  | 'draggable'
  | 'desktop'
  | 'tablet'
  | 'mobile'
  | 'preview'
  | 'search'
  | 'largeSearch'
  | 'import'
  | 'download'
  | 'linked'
  | 'unlinked'
  | 'enableSms'
  | 'disableSms'
  | 'snippets'
  | 'warning'
  | 'pencil'
  | 'hamburger'
  | 'others'
  | 'member'
  | 'bell'
  | 'activeBell'
  | 'helpCenter'
  | 'pos'
  | 'ecStore'
  | 'navigation'
  | 'slider'
  | 'banner'
  | 'collection'
  | 'tabs'
  | 'footer'
  | 'product'
  | 'text'
  | 'video'
  | 'blog'
  | 'article'
  | 'leave'
  | 'document'
  | 'general_page'
  | 'language'
  | 'html'
  | 'undo'
  | 'redo'
  | 'displayDefault'
  | 'displayPartial'
  | 'displayAll'
  | 'game'
  | 'cancel'
  | 'rowNav'
  | 'defaultNav'
  | 'shiningStar'
  | 'list'
  | 'contactInfo'
  | 'customText'
  | 'footerVertical'
  | 'footerHorizontal'
  | 'topPosition'
  | 'midPosition'
  | 'bottomPosition'
  | 'down'
  | 'threeDimensionMenu'
  | 'twoDimensionMenu'
  | 'filter'
  | 'boldText'
  | 'italicText'
  | 'underlineText'
  | 'bulletList'
  | 'numberedList'
  | 'alignLeft'
  | 'alignCenter'
  | 'button'
  | 'title'
  | 'alignRight';

type IconProps = {
  type: IconType;
};

export const Icon = (props: IconProps) => {
  const { type } = props;
  switch (type) {
    case 'add':
      return <Add />;
    case 'addCircle':
      return <AddCircle />;
    case 'unpublished':
      return <Unpublished />;
    case 'published':
      return <Published />;
    case 'edit':
      return <Edit />;
    case 'delete':
      return <Delete />;
    case 'goToPage':
      return <GoToPage />;
    case 'questionMark':
      return <QuestionMark />;
    case 'copy':
      return <Copy />;
    case 'desktop':
      return <Desktop />;
    case 'tablet':
      return <Tablet />;
    case 'mobile':
      return <Mobile />;
    case 'preview':
      return <Preview />;
    case 'draggable':
      return <Draggable />;
    case 'search':
      return <Search />;
    case 'largeSearch':
      return <LargeSearch />;
    case 'import':
      return <Import />;
    case 'download':
      return <Download />;
    case 'linked':
      return <Linked />;
    case 'unlinked':
      return <Unlinked />;
    case 'snippets':
      return <Snippets />;
    case 'enableSms':
      return <EnableSms />;
    case 'disableSms':
      return <DisableSms />;
    case 'warning':
      return <Warning />;
    case 'pencil':
      return <Pencil />;
    case 'hamburger':
      return <Hamburger />;
    case 'others':
      return <Others />;
    case 'member':
      return <Member />;
    case 'bell':
      return <Bell />;
    case 'activeBell':
      return <ActiveBell />;
    case 'helpCenter':
      return <HelpCenter />;
    case 'pos':
      return <Pos />;
    case 'ecStore':
      return <EcStore />;
    case 'navigation':
      return <Navigation />;
    case 'slider':
      return <Slider />;
    case 'banner':
      return <Banner />;
    case 'collection':
      return <Collection />;
    case 'tabs':
      return <Tabs />;
    case 'footer':
      return <Footer />;
    case 'product':
      return <Product />;
    case 'text':
      return <Text />;
    case 'video':
      return <Video />;
    case 'blog':
      return <Blog />;
    case 'article':
      return <Article />;
    case 'leave':
      return <Leave />;
    case 'document':
      return <Document />;
    case 'general_page':
      return <GeneralPage />;
    case 'language':
      return <Language />;
    case 'html':
      return <Html />;
    case 'undo':
      return <Undo />;
    case 'redo':
      return <Redo />;
    case 'displayDefault':
      return <DisplayDefault />;
    case 'displayPartial':
      return <DisplayPartial />;
    case 'displayAll':
      return <DisplayAll />;
    case 'game':
      return <Game />;
    case 'cancel':
      return <Cancel />;
    case 'rowNav':
      return <RowNav />;
    case 'defaultNav':
      return <DefaultNav />;
    case 'shiningStar':
      return <ShiningStar />;
    case 'list':
      return <List />;
    case 'contactInfo':
      return <ContactInfo />;
    case 'customText':
      return <CustomText />;
    case 'footerVertical':
      return <FooterVertical />;
    case 'footerHorizontal':
      return <FooterHorizontal />;
    case 'topPosition':
      return <TopPosition />;
    case 'midPosition':
      return <MidPosition />;
    case 'bottomPosition':
      return <BottomPosition />;
    case 'down':
      return <Down />;
    case 'threeDimensionMenu':
      return <ThreeDimensionMenu />;
    case 'twoDimensionMenu':
      return <TwoDimensionMenu />;
    case 'filter':
      return <Filter />;
    case 'boldText':
      return <BoldText />;
    case 'italicText':
      return <ItalicText />;
    case 'underlineText':
      return <UnderlineText />;
    case 'bulletList':
      return <BulletList />;
    case 'numberedList':
      return <NumberedList />;
    case 'alignLeft':
      return <AlignLeft />;
    case 'alignCenter':
      return <AlignCenter />;
    case 'alignRight':
      return <AlignRight />;
    case 'button':
      return <Button />;
    case 'title':
      return <Title />;
    default:
      return null;
  }
};
