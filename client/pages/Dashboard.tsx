import React, { useState } from "react";
import {
  LayoutDashboard,
  LayoutList,
  BarChart3,
  Folder,
  Users,
  Database,
  FileText,
  MoreHorizontal,
  Settings,
  HelpCircle,
  Search,
  TrendingUp,
  TrendingDown,
  Columns,
  Plus,
  ChevronDown,
  GripVertical,
  Loader2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  SquareArrowOutUpRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

// Mock data for the chart
const chartData = [
  { date: "Apr 2", value: 420 },
  { date: "Apr 8", value: 380 },
  { date: "Apr 14", value: 520 },
  { date: "Apr 21", value: 490 },
  { date: "Apr 28", value: 580 },
  { date: "May 5", value: 540 },
  { date: "May 12", value: 620 },
  { date: "May 19", value: 590 },
  { date: "May 25", value: 680 },
  { date: "Jun 2", value: 640 },
  { date: "Jun 8", value: 720 },
  { date: "Jun 15", value: 700 },
  { date: "Jun 22", value: 760 },
  { date: "Jun 30", value: 740 },
];

// Mock data for documents table
const documents = [
  {
    id: 1,
    header: "Cover page",
    sectionType: "Cover page",
    status: "in-process",
    target: 18,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    id: 2,
    header: "Table of contents",
    sectionType: "Table of contents",
    status: "done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    id: 3,
    header: "Executive summary",
    sectionType: "Narrative",
    status: "done",
    target: 10,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    id: 4,
    header: "Technical approach",
    sectionType: "Narrative",
    status: "done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 5,
    header: "Design",
    sectionType: "Narrative",
    status: "in-process",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 6,
    header: "Capabilities",
    sectionType: "Narrative",
    status: "in-process",
    target: 20,
    limit: 8,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 7,
    header: "Integration with existing systems",
    sectionType: "Narrative",
    status: "in-process",
    target: 19,
    limit: 21,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: 8,
    header: "Innovation and Advantages",
    sectionType: "Narrative",
    status: "done",
    target: 25,
    limit: 26,
    reviewer: null,
  },
  {
    id: 9,
    header: "Overview of EMR's Innovative Solutions",
    sectionType: "Technical content",
    status: "done",
    target: 7,
    limit: 23,
    reviewer: null,
  },
  {
    id: 10,
    header: "Advanced Algorithms and Machine Learning",
    sectionType: "Narrative",
    status: "done",
    target: 30,
    limit: 28,
    reviewer: null,
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState("3months");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-cream via-cream to-red/10 font-montreal pt-[calc(60px+1.4vw)]">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-48" : "w-0"
        } border-r-2 border-dark bg-cream transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            {/* Platform Section */}
            <div className="p-2">
              <div className="px-2 py-2 text-xs font-normal text-muted-foreground opacity-70">
                Platform
              </div>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <LayoutList className="w-4 h-4" />
                  Lifecycle
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <BarChart3 className="w-4 h-4" />
                  Analytics
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <Folder className="w-4 h-4" />
                  Projects
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Team
                </a>
              </nav>
            </div>

            {/* Documents Section */}
            <div className="p-2">
              <div className="px-2 py-2 text-xs font-normal text-muted-foreground opacity-70">
                Documents
              </div>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <Database className="w-4 h-4" />
                  Data Library
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Reports
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Word Assistant
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors opacity-70"
                >
                  <MoreHorizontal className="w-4 h-4" />
                  More
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="p-2 border-t-2 border-dark bg-gradient-to-b from-transparent to-dark/5">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                Get Help
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
              >
                <Search className="w-4 h-4" />
                Search
              </a>
            </nav>

            {/* User Profile */}
            <div className="mt-2 p-2">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://api.builder.io/api/v1/image/assets/TEMP/091ee8a3c91ca32a761e8c21d2d2022b6996cdf7?width=64" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">Shadcn</p>
                  <p className="text-xs text-muted-foreground truncate">
                    m@example.com
                  </p>
                </div>
                <MoreHorizontal className="w-4 h-4 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gradient-to-b from-transparent to-cream/50">
        {/* Content */}
        <div className="p-6 space-y-6 bg-gradient-to-b from-transparent via-transparent to-dark/5">
          {/* Top Section - View in Shadcn Link */}
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs">
              <span className="underline">View in Shadcn</span>
              <SquareArrowOutUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-2 border-dark shadow-lg bg-cream">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm text-dark/70">Total Revenue</p>
                  <Badge
                    variant="outline"
                    className="gap-1 h-[22px] px-2 py-0.5 border-dark/20"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold">+12.5%</span>
                  </Badge>
                </div>
                <p className="text-2xl font-semibold text-dark">$1,250.00</p>
              </CardContent>
              <CardContent className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-dark">
                    Trending up this month
                  </p>
                  <TrendingUp className="w-4 h-4 text-dark" />
                </div>
                <p className="text-sm text-dark/70">
                  Visitors for the last 6 months
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-dark shadow-lg bg-cream">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm text-dark/70">New Customers</p>
                  <Badge
                    variant="outline"
                    className="gap-1 h-[22px] px-2 py-0.5 border-dark/20"
                  >
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-xs font-semibold">-20%</span>
                  </Badge>
                </div>
                <p className="text-2xl font-semibold text-dark">1,234</p>
              </CardContent>
              <CardContent className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-dark">
                    Down 20% this period
                  </p>
                  <TrendingDown className="w-4 h-4 text-dark" />
                </div>
                <p className="text-sm text-dark/70">
                  Acquisition needs attention
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-dark shadow-lg bg-cream">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm text-dark/70">Active Accounts</p>
                  <Badge
                    variant="outline"
                    className="gap-1 h-[22px] px-2 py-0.5 border-dark/20"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold">+12.5%</span>
                  </Badge>
                </div>
                <p className="text-2xl font-semibold text-dark">45,678</p>
              </CardContent>
              <CardContent className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-1 mb-1">
                  <p className="text-sm font-medium text-dark">
                    Strong user retention
                  </p>
                  <TrendingUp className="w-4 h-4 text-dark" />
                </div>
                <p className="text-sm text-dark/70">
                  Engagement exceed targets
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-dark shadow-lg bg-cream">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm text-dark/70">Growth Rate</p>
                  <Badge
                    variant="outline"
                    className="gap-1 h-[22px] px-2 py-0.5 border-dark/20"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-semibold">+4.5%</span>
                  </Badge>
                </div>
                <p className="text-2xl font-semibold text-dark">4.5%</p>
              </CardContent>
              <CardContent className="px-6 pb-6 pt-0">
                <div className="flex items-start gap-1 mb-1">
                  <p className="text-sm font-medium text-dark">
                    Steady performance increase
                  </p>
                  <TrendingUp className="w-4 h-4 flex-shrink-0 text-dark" />
                </div>
                <p className="text-sm text-dark/70">Meets growth projections</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart Card */}
          <Card className="border-2 border-dark shadow-lg bg-gradient-to-br from-cream via-cream to-red/5">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1.5">
                  <CardTitle className="text-base font-semibold">
                    Total Visitors
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Total for the last 3 months
                  </CardDescription>
                </div>
                <Tabs defaultValue="3months" className="w-auto">
                  <TabsList className="h-9 bg-muted p-0.5">
                    <TabsTrigger
                      value="3months"
                      className="h-8 px-4 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                    >
                      Last 3 months
                    </TabsTrigger>
                    <TabsTrigger value="30days" className="h-8 px-4">
                      Last 30 days
                    </TabsTrigger>
                    <TabsTrigger value="7days" className="h-8 px-4">
                      Last 7 days
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              {/* Chart visualization - simplified placeholder */}
              <div className="h-[250px] w-full">
                <svg className="w-full h-full" viewBox="0 0 1000 210">
                  {/* Grid lines */}
                  <line
                    x1="0"
                    y1="0"
                    x2="1000"
                    y2="0"
                    stroke="#282d35"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="52.5"
                    x2="1000"
                    y2="52.5"
                    stroke="#282d35"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="105"
                    x2="1000"
                    y2="105"
                    stroke="#282d35"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="157.5"
                    x2="1000"
                    y2="157.5"
                    stroke="#282d35"
                    strokeWidth="1"
                    opacity="0.1"
                  />
                  <line
                    x1="0"
                    y1="210"
                    x2="1000"
                    y2="210"
                    stroke="#282d35"
                    strokeWidth="1"
                    opacity="0.1"
                  />

                  {/* Chart path - two lines using brand colors */}
                  <path
                    d="M 0,110 L 71,135 L 143,80 L 214,90 L 286,45 L 357,55 L 429,25 L 500,35 L 571,10 L 643,20 L 714,5 L 786,15 L 857,0 L 929,10"
                    fill="none"
                    stroke="#d93535"
                    strokeWidth="2.5"
                    opacity="0.6"
                  />
                  <path
                    d="M 0,120 L 71,145 L 143,90 L 214,100 L 286,55 L 357,65 L 429,35 L 500,45 L 571,20 L 643,30 L 714,15 L 786,25 L 857,10 L 929,20"
                    fill="none"
                    stroke="#282d35"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                {[
                  "Apr 2",
                  "Apr 8",
                  "Apr 14",
                  "Apr 21",
                  "Apr 28",
                  "May 5",
                  "May 12",
                  "May 19",
                  "May 25",
                  "Jun 2",
                  "Jun 8",
                  "Jun 15",
                  "Jun 22",
                  "Jun 30",
                ].map((date) => (
                  <span key={date}>{date}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tabs and Table Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Tabs defaultValue="outline" className="w-auto">
                <TabsList className="h-[34px] bg-muted p-0.5">
                  <TabsTrigger
                    value="outline"
                    className="h-7 px-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                  >
                    Outline
                  </TabsTrigger>
                  <TabsTrigger value="past" className="h-7 px-2 gap-1.5">
                    Past Performance
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-xs">
                      3
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="personnel" className="h-7 px-2 gap-1.5">
                    Key Personnel
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-xs">
                      2
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="focus" className="h-7 px-2">
                    Focus Documents
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1.5">
                  <Columns className="w-4 h-4" />
                  Customize Columns
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1.5">
                  <Plus className="w-4 h-4" />
                  Add columns
                </Button>
              </div>
            </div>

            {/* Data Table */}
            <Card className="border-2 border-dark shadow-lg bg-cream overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-dark hover:bg-dark border-b-2 border-dark">
                    <TableHead className="w-12 text-cream"></TableHead>
                    <TableHead className="w-12 text-cream">
                      <Checkbox className="border-cream data-[state=checked]:bg-red data-[state=checked]:border-red" />
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Header
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Section Type
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Target
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Limit
                    </TableHead>
                    <TableHead className="font-semibold text-cream">
                      Reviewer
                    </TableHead>
                    <TableHead className="w-12 text-cream"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-cream">
                  {documents.map((doc, index) => (
                    <TableRow
                      key={doc.id}
                      className="border-b border-dark/20 hover:bg-dark/5 transition-colors"
                    >
                      <TableCell>
                        <GripVertical className="w-3 h-3 text-dark/40" />
                      </TableCell>
                      <TableCell>
                        <Checkbox className="border-dark/40 data-[state=checked]:bg-red data-[state=checked]:border-red" />
                      </TableCell>
                      <TableCell className="font-semibold text-dark">
                        {doc.header}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="font-medium text-dark/70 border-dark/30 bg-cream/50"
                        >
                          {doc.sectionType}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {doc.status === "done" ? (
                          <Badge
                            variant="outline"
                            className="gap-1 border-green-600/40 bg-green-50"
                          >
                            <CheckCircle2 className="w-3 h-3 fill-green-600 stroke-green-600" />
                            <span className="text-green-700 font-medium">
                              Done
                            </span>
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="gap-1 border-red/40 bg-red/5"
                          >
                            <Loader2 className="w-3 h-3 text-red" />
                            <span className="text-dark/70 font-medium">
                              In Process
                            </span>
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-dark font-medium">
                        {doc.target}
                      </TableCell>
                      <TableCell className="text-dark font-medium">
                        {doc.limit}
                      </TableCell>
                      <TableCell>
                        {doc.reviewer ? (
                          <span className="text-dark font-medium">
                            {doc.reviewer}
                          </span>
                        ) : (
                          <Select>
                            <SelectTrigger className="h-9 w-[146px] border-dark/30 bg-cream hover:bg-dark/5 text-dark">
                              <SelectValue placeholder="Assign reviewer" />
                            </SelectTrigger>
                            <SelectContent className="bg-cream border-2 border-dark">
                              <SelectItem
                                value="eddie"
                                className="text-dark hover:bg-dark/10"
                              >
                                Eddie Lake
                              </SelectItem>
                              <SelectItem
                                value="jamik"
                                className="text-dark hover:bg-dark/10"
                              >
                                Jamik Tashpulatov
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-dark/10 text-dark/70 hover:text-dark"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Table Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t-2 border-dark bg-cream">
                <p className="text-sm text-dark/70 font-medium">
                  0 of 68 row(s) selected.
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-dark">
                      Rows per page
                    </span>
                    <Select defaultValue="10">
                      <SelectTrigger className="h-9 w-20 border-dark/30 bg-cream hover:bg-dark/5 text-dark font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-cream border-2 border-dark">
                        <SelectItem
                          value="10"
                          className="text-dark hover:bg-dark/10"
                        >
                          10
                        </SelectItem>
                        <SelectItem
                          value="20"
                          className="text-dark hover:bg-dark/10"
                        >
                          20
                        </SelectItem>
                        <SelectItem
                          value="50"
                          className="text-dark hover:bg-dark/10"
                        >
                          50
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="text-sm font-semibold text-dark">
                    Page 1 of 7
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-dark/30 bg-cream hover:bg-dark/5 text-dark/40"
                      disabled
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-dark/30 bg-cream hover:bg-dark/5 text-dark/40"
                      disabled
                    >
                      <ChevronsLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-dark/30 bg-cream hover:bg-dark hover:text-cream text-dark transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 border-dark/30 bg-cream hover:bg-dark hover:text-cream text-dark transition-colors"
                    >
                      <ChevronsRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
