import { pgTable, uuid, integer, text, timestamp, primaryKey, varchar, pgEnum } from "drizzle-orm/pg-core";


export const ROLE_ENUM = pgEnum('role', ['user', 'admin']);
export const SENDER_ENUM = pgEnum('sender', ['human', 'agent']);

// USERS
export const usersTable = pgTable("users", {
  userId: uuid("user_id").defaultRandom().primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: ROLE_ENUM('role').default('user'),
  createdAt: timestamp("created_at", {withTimezone: true}).defaultNow(),
});

// CHAT SESSIONS
export const chatSessionsTable = pgTable("chat_sessions", {
  sessionId: uuid("session_id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  sessionName: text("session_name").notNull(),
  startedAt: timestamp("started_at", {withTimezone: true}).defaultNow(),
  endedAt: timestamp("ended_at", {withTimezone: true}),
});

// CHAT MESSAGES
export const chatMessagesTable = pgTable("chat_messages", {
  messageId: uuid("message_id").defaultRandom().primaryKey(),
  sessionId: uuid("session_id")
    .notNull()
    .references(() => chatSessionsTable.sessionId, { onDelete: "cascade" }),
  sender: SENDER_ENUM("sender").notNull(),
  messageText: text("message_text").notNull(),
  timestamp: timestamp("timestamp", {withTimezone: true}).defaultNow(),
});

// FOLDERS
export const foldersTable = pgTable("folders", {
  folderId: uuid("folder_id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  folderName: text("folder_name").notNull(),
  createdAt: timestamp("created_at", {withTimezone: true}).defaultNow(),
});

// FILES
export const filesTable = pgTable("files", {
  fileId: uuid("file_id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  folderId: uuid("folder_id").references(() => foldersTable.folderId, {
    onDelete: "set null",
  }),
  fileName: text("file_name").notNull(),
  fileUrl: text("file_url").notNull(),
  type: text("type").notNull(),
  fileSize: integer("file_size"),
  uploadedAt: timestamp("uploaded_at", {withTimezone: true}).defaultNow(),
});

// FILE CONTEXT
export const fileContextTable = pgTable("file_context", {
  contextId: uuid("context_id").defaultRandom().primaryKey(),
  fileId: uuid("file_id")
    .notNull()
    .references(() => filesTable.fileId, { onDelete: "cascade" }),
  title: text("title"),
  description: text("description"),
  tags: text("tags"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// VISUALIZATIONS
export const visualizationsTable = pgTable("visualizations", {
  visualizationId: uuid("visualization_id")
    .defaultRandom()
    .primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  fileId: uuid("file_id")
    .notNull()
    .references(() => filesTable.fileId, { onDelete: "cascade" }),
  chatMessageId: uuid("chat_message_id")
    .notNull()
    .references(() => chatMessagesTable.messageId, { onDelete: "cascade" }),
  vizUrl: text("viz_url"),
  vizType: text("viz_type"),
  createdAt: timestamp("created_at").defaultNow(),
});

// DASHBOARDS
export const dashboardsTable = pgTable("dashboards", {
  dashboardId: uuid("dashboard_id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.userId, { onDelete: "cascade" }),
  dashboardName: text("dashboard_name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// DASHBOARD VISUALIZATIONS (Many-to-Many)
export const dashboardVisualizationsTable = pgTable(
  "dashboard_visualizations",
  {
    dashboardId: uuid("dashboard_id")
      .notNull()
      .references(() => dashboardsTable.dashboardId, { onDelete: "cascade" }),
    visualizationId: uuid("visualization_id")
      .notNull()
      .references(() => visualizationsTable.visualizationId, {
        onDelete: "cascade",
      }),
  },
  (t) => ({
    pk: primaryKey(t.dashboardId, t.visualizationId),
  })
);
 