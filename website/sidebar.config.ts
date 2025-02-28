import { AiOutlineCompass } from "react-icons/ai"
import { HiOutlineViewGrid } from "react-icons/hi"
import { IconType } from "react-icons/lib"

interface CategoryItem {
  type: "category"
  icon?: IconType
  id: string
  label: string
  collapsible?: boolean
  collapsed?: boolean
  items: SidebarItem[]
}

interface DocItem {
  type: "doc"
  id: string
  label: string
  new?: boolean
  href?: string
}

interface LinkItem {
  type: "link"
  id: string
  label: string
  href: string
}

type SidebarItem = CategoryItem | DocItem | LinkItem

const sidebar: Record<"docs", SidebarItem[]> = {
  docs: [
    {
      type: "category",
      label: "Overview",
      icon: AiOutlineCompass,
      id: "overview",
      items: [
        { type: "doc", label: "Introduction", id: "introduction" },
        { type: "doc", label: "Installation", id: "installation" },
        { type: "doc", label: "State machine", id: "whats-a-machine" },
        { type: "doc", label: "Styling", id: "styling" },
        { type: "doc", label: "Composition", id: "composition" },
        {
          type: "doc",
          label: "Programmatic Control",
          id: "programmatic-control",
        },
        { type: "doc", label: "FAQ", id: "faq" },
        {
          type: "doc",
          label: "Changelog",
          id: "changelogs",
          href: "https://github.com/chakra-ui/zag/blob/main/CHANGELOG.md",
        },
      ],
    },
    {
      type: "category",
      label: "Components",
      icon: HiOutlineViewGrid,
      id: "components",
      items: [
        { type: "doc", label: "Accordion", id: "accordion" },
        { type: "doc", label: "Avatar", id: "avatar" },
        { type: "doc", label: "Carousel", id: "carousel" },
        { type: "doc", label: "Checkbox", id: "checkbox" },
        { type: "doc", label: "ColorPicker", id: "color-picker" },
        { type: "doc", label: "Combobox", id: "combobox" },
        { type: "doc", label: "Dialog", id: "dialog" },
        { type: "doc", label: "Editable", id: "editable" },
        { type: "doc", label: "File Upload", id: "file-upload" },
        { type: "doc", label: "Hover Card", id: "hover-card" },
        { type: "doc", label: "Menu", id: "menu" },
        { type: "doc", label: "Context Menu", id: "context-menu" },
        { type: "doc", label: "Nested Menu", id: "nested-menu" },
        { type: "doc", label: "Number Input", id: "number-input" },
        { type: "doc", label: "Pagination", id: "pagination" },
        { type: "doc", label: "Pin Input", id: "pin-input" },
        {
          type: "doc",
          label: "Progress - Linear",
          id: "linear-progress",
          new: true,
        },
        {
          type: "doc",
          label: "Progress - Circular",
          id: "circular-progress",
          new: true,
        },
        { type: "doc", label: "Popover", id: "popover" },
        { type: "doc", label: "Radio Group", id: "radio-group" },
        { type: "doc", label: "Segmented Control", id: "segmented-control" },
        { type: "doc", label: "Range Slider", id: "range-slider" },
        { type: "doc", label: "Rating Group", id: "rating-group" },
        { type: "doc", label: "Select", id: "select" },
        { type: "doc", label: "Slider", id: "slider" },
        { type: "doc", label: "Splitter", id: "splitter", new: true },
        { type: "doc", label: "Switch", id: "switch" },
        { type: "doc", label: "Tabs", id: "tabs" },
        { type: "doc", label: "Tags Input", id: "tags-input" },
        { type: "doc", label: "Toast", id: "toast" },
        { type: "doc", label: "Toggle Group", id: "toggle-group" },
        { type: "doc", label: "Tooltip", id: "tooltip" },
      ],
    },
  ],
}

export default sidebar
