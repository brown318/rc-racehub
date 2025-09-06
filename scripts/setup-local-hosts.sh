#!/bin/bash

# RC RaceHub - Local Development Hosts Setup
# This script adds local subdomain entries to your hosts file for development

echo "🏁 RC RaceHub - Setting up local development hosts..."

# Check if running on macOS or Linux
if [[ "$OSTYPE" == "darwin"* ]] || [[ "$OSTYPE" == "linux-gnu"* ]]; then
    HOSTS_FILE="/etc/hosts"
    
    echo "📝 Adding entries to $HOSTS_FILE..."
    
    # Check if entries already exist
    if grep -q "ntar.localhost" "$HOSTS_FILE"; then
        echo "✅ ntar.localhost already exists in hosts file"
    else
        echo "127.0.0.1 ntar.localhost" | sudo tee -a "$HOSTS_FILE" > /dev/null
        echo "✅ Added ntar.localhost"
    fi
    
    if grep -q "speedway.localhost" "$HOSTS_FILE"; then
        echo "✅ speedway.localhost already exists in hosts file"
    else
        echo "127.0.0.1 speedway.localhost" | sudo tee -a "$HOSTS_FILE" > /dev/null
        echo "✅ Added speedway.localhost"
    fi
    
    echo ""
    echo "🎉 Setup complete! You can now access:"
    echo "   Main site: http://localhost:3001"
    echo "   NTAR:      http://ntar.localhost:3001"
    echo "   Speedway:  http://speedway.localhost:3001"
    echo ""
    echo "💡 Tip: Clear your browser cache or use incognito mode if subdomains don't work immediately"
    
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    echo "🪟 Windows detected. Please manually add these lines to your hosts file:"
    echo "   File: C:\\Windows\\System32\\drivers\\etc\\hosts"
    echo ""
    echo "   127.0.0.1 ntar.localhost"
    echo "   127.0.0.1 speedway.localhost"
    echo ""
    echo "💡 Run Notepad as Administrator to edit the hosts file"
    
else
    echo "❓ Unknown OS. Please manually add these entries to your hosts file:"
    echo "   127.0.0.1 ntar.localhost"
    echo "   127.0.0.1 speedway.localhost"
fi

echo ""
echo "🔧 After updating hosts file:"
echo "   1. Clear browser cache or use incognito mode"
echo "   2. Restart your browser"
echo "   3. Test the URLs above"
