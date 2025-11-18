import React, { useState, useEffect } from "react";
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
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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

// Mock data for the chart - realistic visitor trends
const chartData = [
  { date: "Apr 2", value: 8420 },
  { date: "Apr 8", value: 9180 },
  { date: "Apr 14", value: 8920 },
  { date: "Apr 21", value: 10490 },
  { date: "Apr 28", value: 11580 },
  { date: "May 5", value: 10940 },
  { date: "May 12", value: 12620 },
  { date: "May 19", value: 13190 },
  { date: "May 25", value: 12680 },
  { date: "Jun 2", value: 14240 },
  { date: "Jun 8", value: 15120 },
  { date: "Jun 15", value: 14800 },
  { date: "Jun 22", value: 16360 },
  { date: "Jun 30", value: 15940 },
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
  const [chartAnimated, setChartAnimated] = useState(false);

  // Trigger chart animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
          {/* Chart Card */}
          <Card className="border-2 border-dark shadow-lg bg-cream mt-6">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1.5">
                  <CardTitle className="text-base font-semibold text-dark">
                    Total Visitors
                  </CardTitle>
                  <CardDescription className="text-sm text-dark/70">
                    Total for the last 3 months
                  </CardDescription>
                </div>
                <Tabs defaultValue="3months" className="w-auto">
                  <TabsList className="h-9 bg-dark/10 p-0.5 border border-dark/20">
                    <TabsTrigger
                      value="3months"
                      className="h-8 px-4 data-[state=active]:bg-cream data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-dark/20 text-dark"
                    >
                      Last 3 months
                    </TabsTrigger>
                    <TabsTrigger value="30days" className="h-8 px-4 text-dark">
                      Last 30 days
                    </TabsTrigger>
                    <TabsTrigger value="7days" className="h-8 px-4 text-dark">
                      Last 7 days
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              {/* Chart visualization */}
              <div className="h-[250px] w-full">
                <svg className="w-full h-full" viewBox="0 0 1000 210">
                  <defs>
                    {/* Gradient for light grey line fill */}
                    <linearGradient id="lightGreyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.05" />
                    </linearGradient>
                    {/* Gradient for dark line fill */}
                    <linearGradient id="darkGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#282d35" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#282d35" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>

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

                  {/* Light grey line - filled area */}
                  <path
                    d="M 0,145 C 25,170 55,135 71,165 C 92,180 118,95 143,125 C 168,148 198,82 214,45 C 235,18 268,110 286,88 C 305,70 332,125 357,75 C 378,35 412,95 429,55 C 448,22 475,118 500,48 C 518,8 548,85 571,35 C 590,0 625,78 643,25 C 665,-15 698,92 714,52 C 732,25 768,65 786,38 C 808,5 835,88 857,42 C 875,12 908,75 929,28 C 948,-8 978,55 1000,18 L 1000,210 L 0,210 Z"
                    fill="url(#lightGreyGradient)"
                    style={{
                      opacity: chartAnimated ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out 0.2s'
                    }}
                  />
                  {/* Light grey line - stroke */}
                  <path
                    d="M 0,145 C 25,170 55,135 71,165 C 92,180 118,95 143,125 C 168,148 198,82 214,45 C 235,18 268,110 286,88 C 305,70 332,125 357,75 C 378,35 412,95 429,55 C 448,22 475,118 500,48 C 518,8 548,85 571,35 C 590,0 625,78 643,25 C 665,-15 698,92 714,52 C 732,25 768,65 786,38 C 808,5 835,88 857,42 C 875,12 908,75 929,28 C 948,-8 978,55 1000,18"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="2000"
                    strokeDashoffset={chartAnimated ? 0 : 2000}
                    style={{
                      transition: 'stroke-dashoffset 1.5s ease-in-out'
                    }}
                  />

                  {/* Dark line - filled area */}
                  <path
                    d="M 0,152 C 28,175 52,142 71,172 C 95,188 122,108 143,135 C 172,155 202,95 214,58 C 238,32 272,118 286,98 C 308,82 338,135 357,88 C 382,48 418,105 429,68 C 452,38 482,125 500,62 C 522,22 552,95 571,48 C 595,12 630,88 643,38 C 670,-5 705,102 714,65 C 738,38 775,75 786,52 C 815,18 842,95 857,55 C 882,25 915,82 929,42 C 955,5 985,62 1000,32 L 1000,210 L 0,210 Z"
                    fill="url(#darkGradient)"
                    style={{
                      opacity: chartAnimated ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out 0.4s'
                    }}
                  />
                  {/* Dark line - stroke */}
                  <path
                    d="M 0,152 C 28,175 52,142 71,172 C 95,188 122,108 143,135 C 172,155 202,95 214,58 C 238,32 272,118 286,98 C 308,82 338,135 357,88 C 382,48 418,105 429,68 C 452,38 482,125 500,62 C 522,22 552,95 571,48 C 595,12 630,88 643,38 C 670,-5 705,102 714,65 C 738,38 775,75 786,52 C 815,18 842,95 857,55 C 882,25 915,82 929,42 C 955,5 985,62 1000,32"
                    fill="none"
                    stroke="#282d35"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="2000"
                    strokeDashoffset={chartAnimated ? 0 : 2000}
                    style={{
                      transition: 'stroke-dashoffset 1.5s ease-in-out 0.2s'
                    }}
                  />
                </svg>
              </div>
              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-dark/70 mt-2">
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
                <TabsList className="h-[34px] bg-dark/10 p-0.5 border border-dark/20">
                  <TabsTrigger
                    value="outline"
                    className="h-7 px-2 data-[state=active]:bg-cream data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-dark/20 text-dark"
                  >
                    Outline
                  </TabsTrigger>
                  <TabsTrigger value="past" className="h-7 px-2 gap-1.5 text-dark">
                    Past Performance
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dark/10 text-xs text-dark">
                      3
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="personnel" className="h-7 px-2 gap-1.5 text-dark">
                    Key Personnel
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-dark/10 text-xs text-dark">
                      2
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="focus" className="h-7 px-2 text-dark">
                    Focus Documents
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1.5 border-dark/30 bg-cream hover:bg-dark/5 text-dark">
                  <Columns className="w-4 h-4" />
                  Customize Columns
                  <ChevronDown className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1.5 border-dark/30 bg-cream hover:bg-dark/5 text-dark">
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
