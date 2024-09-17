
CREATE DATABASE RacoonBarbershopDB;
GO

USE RacoonBarbershopDB;
GO

-- Create the table for users
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Phone NVARCHAR(20) NOT NULL,
    Email NVARCHAR(255) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL,
    Role NVARCHAR(50) NOT NULL CHECK (Role IN ('user', 'admin')) -- Ensure valid roles
);

-- Create the table for services
CREATE TABLE Services (
    ServiceID INT PRIMARY KEY IDENTITY(1,1),
    Description NVARCHAR(255) NOT NULL,
    Cost DECIMAL(10, 2) NOT NULL
);

-- Create the table for appointments
CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    ServiceID INT FOREIGN KEY REFERENCES Services(ServiceID),
    AppointmentDateTime DATETIME NOT NULL,
    CONSTRAINT UniqueAppointment UNIQUE (AppointmentDateTime, ServiceID)
);

-- Create indexes for frequently searched columns
CREATE INDEX idx_users_email ON Users (Email);
CREATE INDEX idx_appointments_userid ON Appointments (UserID);
CREATE INDEX idx_appointments_serviceid ON Appointments (ServiceID);
CREATE INDEX idx_appointments_appointmentdatetime ON Appointments (AppointmentDateTime);

-- Insert some sample services
INSERT INTO Services (Description, Cost) VALUES ('Haircut', 200.00);
INSERT INTO Services (Description, Cost) VALUES ('Beard Trim', 100.00);
INSERT INTO Services (Description, Cost) VALUES ('Eyebrow Wax', 50.00);